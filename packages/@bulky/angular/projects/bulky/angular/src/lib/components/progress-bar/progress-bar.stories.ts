import { moduleMetadata } from '@storybook/angular';
import { bulkyAngularProgressBarModule } from './progress-bar.module';
import { ProgressBarDemoComponent } from './progress-bar-demo.component';
import { bulkyAngularDragDropModule } from '../drag-drop/drag-drop.module';
import { CommonModule } from '@angular/common';

export default {
  title: 'Progress Bar',
  decorators: [
    moduleMetadata({
      imports: [
        bulkyAngularProgressBarModule,
        bulkyAngularDragDropModule,
        CommonModule,
      ],
      declarations: [ProgressBarDemoComponent],
    }),
  ],
};

export const Default = () => ({
  component: ProgressBarDemoComponent,
});
