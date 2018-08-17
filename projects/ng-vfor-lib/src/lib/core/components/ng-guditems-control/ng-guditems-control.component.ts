import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { NgVForContainerDirective } from '../../directives/ng-vFor-container.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nggud-items-control',
  templateUrl: './ng-guditems-control.component.html',
  styleUrls: ['./ng-guditems-control.component.css']
})
export class NgGUDItemsControlComponent implements OnInit, AfterContentInit {
  private _target;

  @ViewChild(NgVForContainerDirective) _container: NgVForContainerDirective;

  constructor() { }

  ngOnInit() {
  }


  public attach(target) {
      this._target = target;
  }

  ngAfterContentInit() {
    if (this._container) {
      console.log('got container');
      this._container.attachUpdate(this._target);
    }
  }
}
