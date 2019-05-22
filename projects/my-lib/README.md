## Alert警告提示  
警告提示，展示需要的信息
会在指定时间内自动关闭，用户也可点击关闭
[Github](https://github.com/sunshine1125/angular-lib)
### 使用
```
<lib-alert type="info"
           message="{{message}}"
           [closeable]="true"
           closeText="Close now"
           [showIcon]="true">
</lib-alert>
```

### 打开警告框
1. 使用@ViewChild()

```
import { AlertComponent } from 'my-lib';
@ViewChild(AlertComponent) private alert: AlertComponent;
showAlert() {
  this.alert.openAlert();
}
```
2.通过本地变量
```
<lib-alert type="success"
           #alert
           message="{{message}}"
           description="{{description}}"
           [showIcon]="true"
           [duration]="10000">
</lib-alert>
<button (click)="alert.openAlert()">显示</button>
```
### 关闭警告框
1. 使用@ViewChild()

```
import { AlertComponent } from 'my-lib';
@ViewChild(AlertComponent) private alert: AlertComponent;
showAlert() {
  this.alert.closeAlert();
}
```
2.通过本地变量
```
<lib-alert type="success"
           #alert
           message="{{message}}"
           description="{{description}}"
           [showIcon]="true"
           [duration]="10000">
</lib-alert>
<button (click)="alert.closeAlert()">显示</button>
```
|参数|说明|类型|默认值|
|-|-|-|-|
|[message]|警告提示内容|string|-|
|[description]|警告提示的辅助性文字介绍|string|-|
|[type]|警告提示类型|’success‘,'info',’warning‘, 'error'|'info'|
|[showIcon]|是否显示图标|boolean|false|
|[closeable]|是否显示关闭按钮|boolean|false|
|[closeText]|自定义关闭按钮|string|-|
|[duration]|默认5秒后自动关闭，只在不显示关闭按钮时有效|number|5000|
