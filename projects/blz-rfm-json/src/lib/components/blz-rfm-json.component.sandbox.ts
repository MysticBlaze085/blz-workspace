import { sandboxOf } from 'angular-playground';
import { BlzRfmJsonComponent } from '../blz-rfm-json.component';

export default sandboxOf(BlzRfmJsonComponent)
  .add('default', {
    template: `<app-blz-rfm-json></app-blz-rfm-json>`
  });
