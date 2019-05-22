import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  destroy = false;
  horizontalDirection: string;
  verticalDirection: string;
  @Input() message: string;
  @Input() description: string;
  @Input() type: 'success' | 'info' | 'warning' | 'error' = 'info';
  @Input() showIcon: boolean = false;
  @Input() closeable: boolean = false;
  @Input() closeText: string;
  @Input() position: string;
  @Input() duration: number = 5000;

  constructor() { }

  ngOnInit() {
    if (this.position) {
      this.getPosition();
    }
    this.autoClose();
  }

  autoClose() {
    if (!this.closeable) {
      setTimeout(() => {
        this.closeAlert();
      }, this.duration)
    }
  }

  getPosition() {
    this.horizontalDirection = this.position.split(' ')[0];
    this.verticalDirection = this.position.split(' ')[1];
  }

  closeAlert() {
    this.destroy = true;
  }

  openAlert() {
    this.destroy = false;
    this.autoClose();
  }
}
