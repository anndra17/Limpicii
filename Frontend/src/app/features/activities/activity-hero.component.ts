import { Component, DestroyRef, ElementRef, afterNextRender, afterRenderEffect, computed, inject, input, viewChild } from '@angular/core';
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

@Component({
  selector: 'app-activity-hero',
  templateUrl: './activity-hero.component.html',
  styleUrl: './activity-hero.component.css',
})
export class ActivityHeroComponent {
  readonly activity = input.required<ActivityId>();

  private readonly translationService = inject(TranslationService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly titlePanel = viewChild<ElementRef<HTMLElement>>('titlePanel');
  private readonly titleElement = viewChild<ElementRef<HTMLHeadingElement>>('titleElement');

  protected readonly title = computed(() => this.translationService.translate(titleKeys[this.activity()]));
  protected readonly titleSize = computed(() => `${130 / this.title().length}vw`);
  protected readonly mobileTitleSize = computed(() => `${90 / this.title().length}vw`);
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

  constructor() {
    afterRenderEffect(() => {
      this.title();
      this.fitTitle();
    });

    afterNextRender(() => {
      const panel = this.titlePanel()?.nativeElement;
      if (!panel) return;

      const observer = new ResizeObserver(() => this.fitTitle());
      observer.observe(panel);
      this.destroyRef.onDestroy(() => observer.disconnect());
      void document.fonts.ready.then(() => this.fitTitle());
    });
  }

  private fitTitle(): void {
    const panel = this.titlePanel()?.nativeElement;
    const title = this.titleElement()?.nativeElement;
    if (!panel || !title) return;

    title.style.removeProperty('font-size');

    const panelStyles = getComputedStyle(panel);
    const availableWidth = panel.clientWidth
      - parseFloat(panelStyles.paddingLeft)
      - parseFloat(panelStyles.paddingRight)
      - 16;
    const titleWidth = title.getBoundingClientRect().width + 8;

    if (titleWidth > availableWidth) {
      const baseSize = parseFloat(getComputedStyle(title).fontSize);
      title.style.fontSize = `${baseSize * availableWidth / titleWidth}px`;
    }
  }
}
