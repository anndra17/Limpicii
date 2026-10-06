import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export type Language = 'ro' | 'en';

@Injectable({ providedIn: 'root' })
export class TranslationService {
	private readonly http = inject(HttpClient);
	private readonly selectedLanguage = signal<Language>(this.readSavedLanguage());
	private readonly translations = signal<Record<string, string>>({});

	readonly language = this.selectedLanguage.asReadonly();

	async initialize(): Promise<void> {
		await this.loadLanguage(this.selectedLanguage());
	}

	async setLanguage(language: Language): Promise<void> {
		this.selectedLanguage.set(language);
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('limpicii-language', language);
		}
		await this.loadLanguage(language);
	}

	translate(key: string): string {
		return this.translations()[key] ?? key;
	}

	private async loadLanguage(language: Language): Promise<void> {
		const translations = await firstValueFrom(
			this.http.get<Record<string, string>>(`assets/i18n/${language}.json`)
		);

		if (this.selectedLanguage() === language) {
			this.translations.set(translations);
			document.documentElement.lang = language;
		}
	}

	private readSavedLanguage(): Language {
		if (typeof localStorage === 'undefined') {
			return 'ro';
		}

		return localStorage.getItem('limpicii-language') === 'en' ? 'en' : 'ro';
	}
}
