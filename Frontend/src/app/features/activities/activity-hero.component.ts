import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

type ActivityId = 'tennis' | 'athletics' | 'skiing' | 'fitness' | 'hiking' | 'swimming';

const titleKeys: Record<ActivityId, string> = {
  tennis: 'ACTIVITIES.TENNIS',
  athletics: 'ACTIVITIES.ATHLETICS',
  skiing: 'ACTIVITIES.SKI',
  fitness: 'ACTIVITIES.FITNESS',
  hiking: 'ACTIVITIES.HIKING',
  swimming: 'ACTIVITIES.SWIMMING',
};

const activityIllustrations: Record<ActivityId, string> = {
  tennis: '/assets/images/activities/tenis_icon-transparent.png',
  athletics: '/assets/images/activities/athletics_icon-transparent.png',
  skiing: '/assets/images/activities/ski_icon-transparent.png',
  fitness: '/assets/images/activities/fitness_icon-transparent.png',
  hiking: '/assets/images/activities/hike_icon-transparent.png',
  swimming: '/assets/images/activities/swimming_icon-transparent.png',
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
  fitness: ['/assets/images/activities/LimpiciiFitness.jpeg'],
  hiking: [
    '/assets/images/activities/LimpiciiHike.jpeg',
    '/assets/images/LimpiciiHike.jpg',
    '/assets/images/camps/hike_Moldoveanu.jpg',
  ],
  swimming: ['/assets/images/activities/LimpiciiSwimming.jpeg'],
};

// Replace null entries with image paths when activity photos are available.
const activityPhotos: Record<ActivityId, (string | null)[]> = {
  tennis: [null, null, null],
  athletics: [null, null, null],
  skiing: [null, null, null],
  fitness: [null, null, null],
  hiking: [null, null, null],
  swimming: [null, null, null],
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
  protected readonly illustration = computed(() => activityIllustrations[this.activity()]);
  protected readonly activityGallery = computed(() => activityImages[this.activity()]);
  protected readonly photoSlots = computed(() => activityPhotos[this.activity()]);
  protected readonly labels = computed(() => {
    const translate = (key: string) => this.translationService.translate(`ACTIVITY_PAGES.COMMON.${key}`);
    return {
      about: translate('ABOUT'),
      trainer: translate('TRAINER'),
      location: translate('LOCATION'),
      extra: translate('EXTRA'),
      photos: translate('PHOTOS'),
      photo: translate('PHOTO'),
    };
  });
  protected readonly copy = computed(() => {
    const prefix = `ACTIVITY_PAGES.${this.activity().toUpperCase()}`;
    const translate = (key: string) => this.translationService.translate(`${prefix}.${key}`);
    return {
      intro: translate('INTRO'),
      description: translate('DESCRIPTION'),
      additionalDescription: translate('ADDITIONAL_DESCRIPTION'),
      trainer: translate('TRAINER'),
      location: translate('LOCATION'),
      extra: translate('EXTRA'),
    };
  });

  protected readonly trainerImage = computed(() => this.activityGallery()[0]);
  protected readonly locationImage = computed(() => this.activityGallery()[1] ?? this.activityGallery()[0]);

}
