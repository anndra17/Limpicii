import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language, TranslationService } from '../../../core/services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
    selector: 'app-nav-bar',
    imports: [CommonModule, TranslatePipe],
    templateUrl: './nav-bar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
	readonly translationService = inject(TranslationService);
  isMenuOpen = false;

	setLanguage(language: Language): void {
		void this.translationService.setLanguage(language);
	}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
