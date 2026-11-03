import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

type ActivityId = 'tennis' | 'athletics' | 'skiing' | 'gymnastics' | 'hiking' | 'swimming';

const titleKeys: Record<ActivityId, string> = {
  tennis: 'ACTIVITIES.TENNIS',
  athletics: 'ACTIVITIES.ATHLETICS',
  skiing: 'ACTIVITIES.SKI',
  gymnastics: 'ACTIVITIES.GYMNASTICS',
  hiking: 'ACTIVITIES.HIKING',
  swimming: 'ACTIVITIES.SWIMMING',
};

const activityImages: Record<ActivityId, string> = {
  tennis: '/assets/images/activities/LimpiciiTennis.jpg',
  athletics: '/assets/images/activities/LimpiciiAthletics.jpeg',
  skiing: '/assets/images/activities/LimpiciiSki.jpeg',
  gymnastics: '/assets/images/activities/LimpiciiGymnastics.jpeg',
  hiking: '/assets/images/activities/LimpiciiHike.jpeg',
  swimming: '/assets/images/activities/LimpiciiSwimming.jpeg',
};

@Component({
  selector: 'app-activity-hero',
  templateUrl: './activity-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityHeroComponent {
  readonly activity = input.required<ActivityId>();

  private readonly translationService = inject(TranslationService);

  protected readonly title = computed(() => this.translationService.translate(titleKeys[this.activity()]));
  protected readonly activityImage = computed(() => activityImages[this.activity()]);
  protected readonly labels = computed(() => {
    const translate = (key: string) => this.translationService.translate(`ACTIVITY_PAGES.COMMON.${key}`);
    return {
      level: translate('LEVEL'),
      about: translate('ABOUT'),
      location: translate('LOCATION'),
      events: translate('EVENTS'),
      competitions: translate('COMPETITIONS'),
      camps: translate('CAMPS'),
    };
  });
  protected readonly copy = computed(() => {
    const prefix = `ACTIVITY_PAGES.${this.activity().toUpperCase()}`;
    const translate = (key: string) => this.translationService.translate(`${prefix}.${key}`);
    return {
      eyebrow: translate('EYEBROW'),
      intro: translate('INTRO'),
      level: translate('LEVEL'),
      description: translate('DESCRIPTION'),
      location: translate('LOCATION'),
      competitions: translate('COMPETITIONS'),
      camps: translate('CAMPS'),
    };
  });

}
