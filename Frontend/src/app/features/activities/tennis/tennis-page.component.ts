import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'tennis-page',
  imports: [TranslatePipe],
  styleUrl: './tennis-page.component.css',
  templateUrl: './tennis-page.component.html',
})
export class TennisPageComponent {
  protected readonly language = inject(TranslationService).language;
}
