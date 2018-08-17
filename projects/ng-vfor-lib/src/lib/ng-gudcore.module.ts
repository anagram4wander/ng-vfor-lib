import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgGUDItemsControlComponent } from './core/components/ng-guditems-control/ng-guditems-control.component';
import { NgVForDirective } from './core/directives/ng-vFor.directive';
import { NgVForContainerDirective } from './core/directives/ng-vFor-container.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgGUDItemsControlComponent,
    NgVForDirective,
    NgVForContainerDirective
  ],
  providers: [
  ],
  exports: [
    NgGUDItemsControlComponent,
    NgVForDirective,
    NgVForContainerDirective
  ]
})
export class NgGUDCoreModule { }
