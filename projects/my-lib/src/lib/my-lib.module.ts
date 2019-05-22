import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLibComponent } from './my-lib.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [MyLibComponent, AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [MyLibComponent, AlertComponent]
})
export class MyLibModule { }
