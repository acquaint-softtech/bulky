import { Component, OnInit } from '@angular/core';
import { bulky } from '@bulky/core';
import Webcam from '@bulky/webcam';
import Tus from '@bulky/tus';
import GoogleDrive from '@bulky/google-drive';

@Component({
  selector: 'app-root',
  template: /* html */ `
    <h1>bulky Angular Example!</h1>
    <h2>Inline dashboard</h2>
    <label>
      <input
        type="checkbox"
        (change)="showInline = $event.target.checked"
        [checked]="showInline"
      />
      Show Dashboard
    </label>

    <bulky-dashboard
      [bulky]="bulky"
      [props]="dashboardProps"
      *ngIf="showInline"
    ></bulky-dashboard>

    <h2>Modal Dashboard</h2>
    <div>
      <bulky-dashboard-modal
        [bulky]="bulky"
        [open]="showModal"
        [props]="dashboardModalProps"
      ></bulky-dashboard-modal>
      <button (click)="showModal = !showModal">
        {{ showModal ? 'Close dashboard' : 'Open dashboard' }}
      </button>
    </div>

    <h2>Drag Drop Area</h2>
    <bulky-drag-drop [bulky]="bulky" [props]="{}"></bulky-drag-drop>

    <h2>Progress Bar</h2>
    <bulky-progress-bar
      [bulky]="bulky"
      [props]="{ hideAfterFinish: false }"
    ></bulky-progress-bar>
  `,
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'angular-example';

  showInline = false;

  showModal = false;

  dashboardProps = {
    plugins: ['Webcam'],
  };

  dashboardModalProps = {
    target: document.body,
    onRequestCloseModal: (): void => {
      this.showModal = false;
    },
  };

  bulky: bulky = new bulky({ debug: true, autoProceed: true });

  ngOnInit(): void {
    this.bulky
      .use(Webcam)
      .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
      .use(GoogleDrive, { companionUrl: 'https://companion.bulky.io' });
  }
}
