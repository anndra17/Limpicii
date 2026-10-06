import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    imports: [CommonModule],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
	images: string[] = [
		'assets/images/LimpiciiHike.jpg',
		'assets/images/LimpiciiLake.jpg',
		'assets/images/NatureHeader.png',
		'assets/images/LimpiciiTennis.jpg'
	];
	currentImage = 0;
	showImage = true;
	private intervalId: any;

	ngOnInit() {
		this.intervalId = setInterval(() => {
			this.showImage = false;
			setTimeout(() => {
				this.currentImage = (this.currentImage + 1) % this.images.length;
				this.showImage = true;
			}, 400);
		}, 3500);
	}

	ngOnDestroy() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}
}
