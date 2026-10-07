import { Component } from '@angular/core';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-history-page',
  imports: [TranslatePipe],
  styleUrl: './history-page.component.css',
  templateUrl: './history-page.component.html',
})
export class HistoryPageComponent {}
