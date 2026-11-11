import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-code-page',
  imports: [TranslatePipe],
  templateUrl: './code-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodePageComponent {}
