import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { communityStories } from './community-stories';

@Component({
  selector: 'app-community-news-page',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './community-news-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityNewsPageComponent {
  readonly stories = communityStories;
}
