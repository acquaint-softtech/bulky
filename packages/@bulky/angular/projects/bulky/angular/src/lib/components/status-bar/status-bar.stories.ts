import { StatusBarDemoComponent } from './status-bar-demo.component';
import { moduleMetadata } from '@storybook/angular';
import { bulkyAngularStatusBarModule } from './status-bar.module';

export default {
  title: 'Status Bar',
  decorators: [
    moduleMetadata({
      imports: [bulkyAngularStatusBarModule],
      declarations: [StatusBarDemoComponent],
    }),
  ],
};

export const Default = () => ({
  component: StatusBarDemoComponent,
});
