import { Component } from '@angular/core';
import { ActivityHeroComponent } from '../activity-hero.component';

@Component({
  selector: 'hiking-page',
  imports: [ActivityHeroComponent],
  styleUrl: './hiking-page.component.css',
  templateUrl: './hiking-page.component.html',
})
export class HikingPageComponent {}
