import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-camps-page',
  imports: [TranslatePipe],
  templateUrl: './camps-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampsPageComponent {}
