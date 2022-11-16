import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as Dashboard from '@bulky/dashboard';
import { bulky } from '@bulky/core';

@Component({
  selector: 'bulky-dashboard-demo',
  template: `<bulky-dashboard-modal
    [bulky]="bulky"
    [props]="props"
  ></bulky-dashboard-modal>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardModalDemoComponent {
  bulky: bulky = new bulky({ debug: true, autoProceed: true });
  props: Dashboard.DashboardOptions;
}
