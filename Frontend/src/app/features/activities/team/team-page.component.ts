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
    { name: 'Peter Simona', initials: 'PS', description: 'TEAM.MEMBER_ONE', color: 'from-rose-400 to-orange-300' },
    { name: 'Mada Laurentiu', initials: 'ML', description: 'TEAM.MEMBER_TWO', color: 'from-sky-500 to-cyan-300' },
    { name: 'Mada Vlad', initials: 'MV', description: 'TEAM.MEMBER_THREE', color: 'from-violet-500 to-fuchsia-300' },
    { name: 'Mada Stanca', initials: 'MS', description: 'TEAM.MEMBER_FOUR', color: 'from-lime-600 to-emerald-300' },
  ];
}
