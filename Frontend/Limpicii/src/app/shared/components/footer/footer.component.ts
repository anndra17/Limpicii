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
			value: '+40 721 814 747',
			href: 'tel:+40721814747'
		},
		{
			label: 'E-mail',
			value: 'limpicii.bv@gmail.com',
			href: 'mailto:limpicii.bv@gmail.com'
		},
		{
			label: 'Facebook',
			value: 'Limpicii',
			href: 'https://www.facebook.com/limpicii',
			external: true
		}
	];
}
