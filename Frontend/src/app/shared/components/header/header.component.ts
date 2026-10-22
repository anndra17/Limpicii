import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-header',
	imports: [CommonModule, TranslatePipe],
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
	images: string[] = [
		'assets/images/munti-wide.png',
		'assets/images/activities/LimpiciiHike.jpeg',
		'assets/images/activities/LimpiciiSwimming.jpeg',
		'assets/images/LimpiciiTennis.jpg',
		'assets/images/activities/LimpiciiAthletics.jpeg',
	];
	currentImage = signal(0);
	showImage = signal(true);
	private intervalId: any;

	ngOnInit() {
		this.intervalId = setInterval(() => {
			this.showImage.set(false);

			setTimeout(() => {
				this.currentImage.update(
					(index) => (index + 1) % this.images.length
				);
				this.showImage.set(true);
			}, 400);
		}, 3500);
	}

	ngOnDestroy() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}
}
