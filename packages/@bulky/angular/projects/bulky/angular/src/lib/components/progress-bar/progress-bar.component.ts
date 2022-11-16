import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { bulky } from '@bulky/core';
import ProgressBar from '@bulky/progress-bar';
import type { ProgressBarOptions } from '@bulky/progress-bar';
import { bulkyAngularWrapper } from '../../utils/wrapper';

@Component({
  selector: 'bulky-progress-bar',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent
  extends bulkyAngularWrapper
  implements OnDestroy, OnChanges
{
  @Input() bulky: bulky = new bulky();
  @Input() props: ProgressBarOptions = {};

  constructor(public el: ElementRef) {
    super();
  }

  ngOnInit() {
    this.onMount(
      { id: 'angular:ProgressBar', target: this.el.nativeElement },
      ProgressBar
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleChanges(changes, ProgressBar);
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
