import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import Dashboard from '@bulky/dashboard';
import type { DashboardOptions } from '@bulky/dashboard';
import { bulky } from '@bulky/core';
import { bulkyAngularWrapper } from '../../utils/wrapper';

@Component({
  selector: 'bulky-dashboard',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent
  extends bulkyAngularWrapper
  implements OnDestroy, OnChanges
{
  @Input() bulky: bulky = new bulky();
  @Input() props: DashboardOptions = {};

  constructor(public el: ElementRef) {
    super();
  }

  ngOnInit() {
    this.onMount(
      { id: 'angular:Dashboard', inline: true, target: this.el.nativeElement },
      Dashboard
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleChanges(changes, Dashboard);
  }

  ngOnDestroy(): void {
    this.uninstall();
  }
}
