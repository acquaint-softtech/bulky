import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { bulky } from '@bulky/core';
import { Tus, ProgressBar } from 'bulky';

@Component({
  selector: 'bulky-progress-bar-demo',
  template: `
    <section class="example-one">
      <h5>autoProceed is on</h5>

      <!-- Target DOM node #1 -->
      <bulky-drag-drop [bulky]="bulkyOne"></bulky-drag-drop>

      <!-- Progress bar #1 -->
      <bulky-progress-bar
        [bulky]="bulkyOne"
        [props]="props"
      ></bulky-progress-bar>

      <!-- Uploaded files list #1 -->
      <div class="uploaded-files" *ngIf="fileListOne?.length">
        <h5>Uploaded files:</h5>
        <ol>
          <li *ngFor="let item of fileListOne">
            <a [href]="item.url" target="_blank"> {{ item.fileName }}</a>
          </li>
        </ol>
      </div>
    </section>

    <section class="example-two">
      <h5>autoProceed is off</h5>

      <!-- Target DOM node #1 -->
      <bulky-drag-drop [bulky]="bulkyTwo"></bulky-drag-drop>

      <!-- Progress bar #1 -->
      <bulky-progress-bar
        [bulky]="bulkyTwo"
        [props]="props"
      ></bulky-progress-bar>

      <button (click)="upload()" class="upload-button">Upload</button>

      <!-- Uploaded files list #2 -->
      <div class="uploaded-files" *ngIf="fileListTwo?.length">
        <h5>Uploaded files:</h5>
        <ol>
          <li *ngFor="let item of fileListTwo">
            <a [href]="item.url" target="_blank"> {{ item.fileName }}</a>
          </li>
        </ol>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarDemoComponent implements OnInit {
  bulkyOne: bulky;
  bulkyTwo: bulky;
  fileListOne: { url: string; fileName: string }[] = [];
  fileListTwo: { url: string; fileName: string }[] = [];
  props: ProgressBar.ProgressBarOptions = {
    hideAfterFinish: false,
  };

  upload(): void {
    this.bulkyTwo.upload();
  }

  constructor(private cdr: ChangeDetectorRef) {}

  updateFileList =
    (target: string) =>
    (file, response): void => {
      this[target] = [
        ...this[target],
        { url: response.uploadURL, fileName: file.name },
      ];
      this.cdr.markForCheck();
    };

  ngOnInit(): void {
    this.bulkyOne = new bulky({ debug: true, autoProceed: true })
      .use(Tus, { endpoint: 'https://master.tus.io/files/' })
      .on('upload-success', this.updateFileList('fileListOne'));
    this.bulkyTwo = new bulky({ debug: true, autoProceed: false })
      .use(Tus, { endpoint: 'https://master.tus.io/files/' })
      .on('upload-success', this.updateFileList('fileListTwo'));
  }
}
