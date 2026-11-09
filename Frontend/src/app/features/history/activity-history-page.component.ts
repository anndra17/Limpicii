import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-activity-history-page',
  imports: [TranslatePipe],
  templateUrl: './activity-history-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityHistoryPageComponent {}
