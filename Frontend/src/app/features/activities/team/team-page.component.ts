import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-team-page',
  imports: [TranslatePipe],
  templateUrl: './team-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamPageComponent {}
