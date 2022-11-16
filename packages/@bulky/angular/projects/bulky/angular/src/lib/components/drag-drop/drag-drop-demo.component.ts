import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as DragDrop from '@bulky/drag-drop';
import { bulky } from '@bulky/core';

@Component({
  selector: 'bulky-drag-drop-demo',
  template: `
    <bulky-drag-drop [bulky]="bulky" [props]="props"></bulky-drag-drop>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragDropDemoComponent {
  bulky: bulky = new bulky({ debug: true, autoProceed: true });
  props: DragDrop.DragDropOptions = {};
}
