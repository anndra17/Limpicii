import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface FooterContactLink {
	label: string;
	value: string;
	href: string;
	external?: boolean;
}

@Component({
    selector: 'app-footer',
    imports: [CommonModule, TranslatePipe],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './footer.component.html'
})
export class FooterComponent {
	readonly currentYear = new Date().getFullYear();

	readonly contactLinks: FooterContactLink[] = [
		{
			label: 'FOOTER.PHONE',
			value: '+40 721 814 747',
			href: 'tel:+40721814747'
		},
		{
			label: 'FOOTER.EMAIL',
			value: 'limpicii.bv@gmail.com',
			href: 'mailto:limpicii.bv@gmail.com'
		},
		{
			label: 'FOOTER.FACEBOOK',
			value: 'Limpicii',
			href: 'https://www.facebook.com/limpicii',
			external: true
		}
	];
}
