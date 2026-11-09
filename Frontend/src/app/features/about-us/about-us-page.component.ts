import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-about-us-page',
  imports: [TranslatePipe],
  styleUrl: './about-us-page.component.css',
  templateUrl: './about-us-page.component.html',
})
export class AboutUsPageComponent {}
