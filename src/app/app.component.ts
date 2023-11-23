import { Component } from '@angular/core';
import { AppModalService } from './modal';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-antd-modal';

  constructor(
    private _modalService: AppModalService,
    private _nzModalService: NzModalService,
  ) {

  }

  onOpenModal(): void {
    this._modalService.confirm({
      nzTitle: 'Thông báo',
      nzContent: 'Nội dung',
      nzOkText: 'Hoàn thành',
      nzCancelText: 'Hủy',
    });
  }

  onOpenOriginalModal(): void {
    this._nzModalService.confirm({
      nzTitle: 'Thông báo',
      nzContent: 'Nội dung',
      nzOkText: 'Hoàn thành',
      nzCancelText: 'Hủy',
    });
  }
}
