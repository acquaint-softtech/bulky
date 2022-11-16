import { moduleMetadata } from '@storybook/angular';
import { bulkyAngularDragDropModule } from './drag-drop.module';
import { DragDropDemoComponent } from './drag-drop-demo.component';

export default {
  title: 'Drag Drop',
  decorators: [
    moduleMetadata({
      imports: [bulkyAngularDragDropModule],
      declarations: [DragDropDemoComponent],
    }),
  ],
};

export const Default = () => ({
  component: DragDropDemoComponent,
});
