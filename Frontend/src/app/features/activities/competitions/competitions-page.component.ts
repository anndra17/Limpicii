import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-competitions-page',
  imports: [TranslatePipe],
  templateUrl: './competitions-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetitionsPageComponent {}
