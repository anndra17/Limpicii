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

const activityImages: Record<ActivityId, string[]> = {
  tennis: [
    '/assets/images/activities/LimpiciiTennis.jpg',
    '/assets/images/LimpiciiTurneuTenis2026.jpg',
    '/assets/images/tenis.png',
  ],
  athletics: [
    '/assets/images/activities/LimpiciiAthletics.jpeg',
    '/assets/images/news/cros15noiembrie.jpg',
    '/assets/images/news/brasovMarathon.jpg',
  ],
  skiing: ['/assets/images/activities/LimpiciiSki.jpeg', '/assets/images/munti-wide.png'],
  gymnastics: ['/assets/images/activities/LimpiciiGymnastics.jpeg'],
  hiking: [
    '/assets/images/activities/LimpiciiHike.jpeg',
    '/assets/images/LimpiciiHike.jpg',
    '/assets/images/camps/hike_Moldoveanu.jpg',
  ],
  swimming: ['/assets/images/activities/LimpiciiSwimming.jpeg'],
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
  protected readonly activityGallery = computed(() => activityImages[this.activity()]);
  protected readonly labels = computed(() => {
    const translate = (key: string) => this.translationService.translate(`ACTIVITY_PAGES.COMMON.${key}`);
    return {
      location: translate('LOCATION'),
    };
  });
  protected readonly copy = computed(() => {
    const prefix = `ACTIVITY_PAGES.${this.activity().toUpperCase()}`;
    const translate = (key: string) => this.translationService.translate(`${prefix}.${key}`);
    return {
      intro: translate('INTRO'),
      description: translate('DESCRIPTION'),
      additionalDescription: translate('ADDITIONAL_DESCRIPTION'),
      location: translate('LOCATION'),
    };
  });

}
