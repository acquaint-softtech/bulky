import { DashboardDemoComponent } from './dashboard-demo.component';
import { moduleMetadata } from '@storybook/angular';
import { bulkyAngularDashboardModule } from './dashboard.module';

export default {
  title: 'Dashboard',
  decorators: [
    moduleMetadata({
      imports: [bulkyAngularDashboardModule],
      declarations: [DashboardDemoComponent],
    }),
  ],
};

export const Default = () => ({
  component: DashboardDemoComponent,
});
