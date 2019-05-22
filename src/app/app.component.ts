import { Component, ViewChild } from '@angular/core';
import { AlertComponent } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  message = "Title";
  description = "Success Description Success Description Success Description Success Description Success Description Success Description Success Description Success Description Success Description Success Description Success Description Success Description Success Description Success Description Success Description"
  display1 = false;
  display2 = false;
  display3 = false;
  display4 = false;
  @ViewChild(AlertComponent) private alert: AlertComponent;
  constructor(
  ){}

  showAlert() {
    this.alert.openAlert();
  }
  show2() {
    this.alert.closeAlert();
  }
  show3() {
    this.display3 = !this.display3;
  }
  show4() {
    this.display4 = !this.display4;
  }
}
