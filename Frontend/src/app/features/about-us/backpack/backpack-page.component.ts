import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-backpack-page',
  imports: [TranslatePipe],
  templateUrl: './backpack-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackpackPageComponent {}
