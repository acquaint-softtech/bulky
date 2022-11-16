import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  SimpleChange,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { bulky } from '@bulky/core';
import StatusBar from '@bulky/status-bar';
import type { StatusBarOptions } from '@bulky/status-bar';
import { bulkyAngularWrapper } from '../../utils/wrapper';

@Component({
  selector: 'bulky-status-bar',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBarComponent
  extends bulkyAngularWrapper
  implements OnDestroy, OnChanges
{
  @Input() bulky: bulky = new bulky();
  @Input() props: StatusBarOptions = {};

  constructor(public el: ElementRef) {
    super();
  }

  ngOnInit() {
    this.onMount(
      { id: 'angular:StatusBar', target: this.el.nativeElement },
      StatusBar
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleChanges(changes, StatusBar);
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
