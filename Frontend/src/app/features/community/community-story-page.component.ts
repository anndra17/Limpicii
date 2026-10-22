import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { communityStories } from './community-stories';

@Component({
  selector: 'app-community-story-page',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './community-story-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityStoryPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug'))),
    { initialValue: this.route.snapshot.paramMap.get('slug') },
  );

  get story() {
    return communityStories.find((item) => item.slug === this.slug());
  }
}
