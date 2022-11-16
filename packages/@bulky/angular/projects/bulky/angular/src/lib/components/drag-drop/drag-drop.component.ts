import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  ElementRef,
} from '@angular/core';
import { bulky } from '@bulky/core';
import DragDrop from '@bulky/drag-drop';
import type { DragDropOptions } from '@bulky/drag-drop';
import { bulkyAngularWrapper } from '../../utils/wrapper';

@Component({
  selector: 'bulky-drag-drop',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragDropComponent
  extends bulkyAngularWrapper
  implements OnDestroy, OnChanges
{
  @Input() bulky: bulky = new bulky();
  @Input() props: DragDropOptions = {};

  constructor(public el: ElementRef) {
    super();
  }

  ngOnInit() {
    this.onMount(
      { id: 'angular:DragDrop', target: this.el.nativeElement },
      DragDrop
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleChanges(changes, DragDrop);
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
