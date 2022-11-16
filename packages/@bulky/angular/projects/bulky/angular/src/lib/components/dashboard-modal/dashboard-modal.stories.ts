import { DashboardModalDemoComponent } from './dashboard-modal-demo.component';
import { moduleMetadata } from '@storybook/angular';
import { bulkyAngularDashboardModalModule } from './dashboard-modal.module';

export default {
  title: 'Dashboard',
  decorators: [
    moduleMetadata({
      imports: [bulkyAngularDashboardModalModule],
      declarations: [DashboardModalDemoComponent],
    }),
  ],
};

export const Default = () => ({
  component: DashboardModalDemoComponent,
});
