import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as Dashboard from '@bulky/dashboard';
import { bulky } from '@bulky/core';

@Component({
  selector: 'bulky-dashboard-demo',
  template: `<bulky-dashboard
    [bulky]="bulky"
    [props]="props"
  ></bulky-dashboard>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardDemoComponent {
  bulky: bulky = new bulky({ debug: true, autoProceed: true });
  props: Dashboard.DashboardOptions;
}
