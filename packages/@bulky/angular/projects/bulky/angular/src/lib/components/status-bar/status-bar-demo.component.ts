import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as StatusBar from '@bulky/status-bar';
import { bulky } from '@bulky/core';
import { FileInput, Tus } from 'bulky';

@Component({
  selector: 'bulky-status-bar-demo',
  template: `
    <div class="bulkyInput"></div>
    <bulky-status-bar [bulky]="bulky" [props]="props"></bulky-status-bar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBarDemoComponent implements OnInit {
  bulky: bulky = new bulky({ debug: true, autoProceed: true });
  props: StatusBar.StatusBarOptions = {
    hideUploadButton: true,
    hideAfterFinish: false,
  };

  ngOnInit(): void {
    this.bulky
      .use(FileInput, { target: '.bulkyInput', pretty: false })
      .use(Tus, { endpoint: 'https://master.tus.io/files/' });
  }
}
