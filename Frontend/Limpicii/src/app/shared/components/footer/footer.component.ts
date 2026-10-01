import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterContactLink {
	label: string;
	value: string;
	href: string;
	external?: boolean;
}

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './footer.component.html'
})
export class FooterComponent {
	readonly currentYear = new Date().getFullYear();

	readonly contactLinks: FooterContactLink[] = [
		{
			label: 'Telefon',
			value: '+40 700 000 000',
			href: 'tel:+40000000000'
		},
		{
			label: 'E-mail',
			value: 'contact@limpicii.com',
			href: 'mailto:contact@limpicii.com'
		},
		{
			label: 'Facebook',
			value: 'Asociația Sportivă Limpicii Brașov',
			href: 'https://www.facebook.com/limpicii',
			external: true
		}
	];
}
