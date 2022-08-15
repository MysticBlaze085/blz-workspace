import { BlzRfmJsonComponent } from './blz-rfm-json.component';
import { sandboxOf } from 'angular-playground';

export default sandboxOf(BlzRfmJsonComponent)
  .add('Actual Testing', {
    template: `<lib-blz-rfm-json></lib-blz-rfm-json>`
  });
