import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-team-page',
  imports: [TranslatePipe],
  templateUrl: './team-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamPageComponent {
  readonly members = [
    { name: 'Măda Stanca', initials: 'MS',  description: 'Președinte ACS Limpicii Brașov', color: 'from-lime-600 to-emerald-300' },
    { name: 'Măda Laurentiu', initials: 'ML',  description: 'Instructor natație, schi, tenis, fitness și sportul pentru toți', color: 'from-sky-500 to-cyan-300' },
    { name: 'Măda Vlad', initials: 'MV',  description: 'Antrenor de tenis și schi. Instructor natație, atletism, gimnastică. Planificarea activităților sportive', color: 'from-violet-500 to-fuchsia-300' },
    { name: 'Peter Simona', initials: 'PS',  description: 'Instructor atletism. Sportiv legitimat secția atletism', color: 'from-rose-400 to-orange-300' },
    { name: 'Mocanu Petronela', initials: 'MP',  description: 'Antrenor atletism, kinetoterapeut, specialist în refacere și recuperare sportivă. Sportiv legitimat secția atletism.', color: 'from-lime-600 to-emerald-300' },
  ];
}
