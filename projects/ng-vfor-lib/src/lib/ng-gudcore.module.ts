import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgGUDItemsControlComponent } from './core/components/ng-guditems-control/ng-guditems-control.component';
import { NgVForDirective } from './core/directives/ng-vFor.directive';
import { NgVForContainerDirective } from './core/directives/ng-vFor-container.directive';
import { NgGUDVForChannelService } from './core/services/ng-gud-vFor-channel.service';

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
    NgGUDVForChannelService
  ],
  exports: [
    NgGUDItemsControlComponent,
    NgVForDirective,
    NgVForContainerDirective
  ]
})
export class NgGUDCoreModule { }
