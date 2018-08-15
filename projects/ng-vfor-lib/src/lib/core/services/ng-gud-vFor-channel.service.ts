import { Injectable } from '@angular/core';
import { NgVForContainerDirective } from '../directives/ng-vFor-container.directive';
import { NgVForDirective } from '../directives/ng-vFor.directive';

export class NgVForContainerChildPair {
    public nativeElementOfContainer;
    public container: NgVForContainerDirective = null;
    public target: NgVForDirective<any> = null;

    constructor(nativeElement, container: NgVForContainerDirective) {
        this.nativeElementOfContainer = nativeElement;
        this.container = container;
    }

    public setViewPort(topPostion: number, start: number, end: number) {
        if (this.target !== null) {
            this.target.setTargetViewPort(topPostion, start, end);
        }
    }
}

@Injectable()
export class NgGUDVForChannelService {
    private _registrations = new Map<any, NgVForContainerChildPair>();
    private _queue = new Array<any>();

    public registerContainer(nativeElement, container: NgVForContainerDirective) {
        let ret = null;
        if (!this._registrations.has(nativeElement)) {
            this._registrations.set(nativeElement, ret = new NgVForContainerChildPair(nativeElement, container));
        }

        if (this._queue.length > 0) {
            let wired = 0;
            for (let loop = 0; loop < this._queue.length; loop ++) {
                const e = this._queue[loop];

                if (e !== null) {
                    const r = this.registerVFor(e.nativeElement, e.vfor);
                    if ( r === null) {
                        this._queue[loop] = null;
                        wired++;
                    }
                }
            }

            if (wired === this._queue.length) {
                this._queue = new Array();
            }
        }

        return ret;
    }

    public unregisterContainer(nativeElement) {
        if (this._registrations.has(nativeElement)) {
            this._registrations.delete(nativeElement);
        }
    }

    public registerVFor(nativeElement, vfor: NgVForDirective<any>) {
        let ret: NgVForContainerChildPair = null;
        let parent = nativeElement.parentElement;

        while (ret === null && parent !== null) {
            if (this._registrations.has(parent)) {
                ret = this._registrations.get(parent);
                ret.target = vfor;
            } else {
                parent = parent.parentElement;
            }
        }

        if (ret === null) {
            this._queue.push({ nativeElement: nativeElement, vfor: vfor});
        }

        return ret;
    }
}
