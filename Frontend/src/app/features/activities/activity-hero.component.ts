import { Component, DestroyRef, ElementRef, afterNextRender, afterRenderEffect, computed, inject, input, viewChild } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-activity-hero',
  templateUrl: './activity-hero.component.html',
  styleUrl: './activity-hero.component.css',
})
export class ActivityHeroComponent {
  readonly titleKey = input.required<string>();

  private readonly translationService = inject(TranslationService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly heroElement = viewChild<ElementRef<HTMLElement>>('heroElement');
  private readonly titleElement = viewChild<ElementRef<HTMLHeadingElement>>('titleElement');

  protected readonly title = computed(() => this.translationService.translate(this.titleKey()));
  protected readonly titleSize = computed(() => `${130 / this.title().length}vw`);
  protected readonly mobileTitleSize = computed(() => `${90 / this.title().length}vw`);

  constructor() {
    afterRenderEffect(() => {
      this.title();
      this.fitTitle();
    });

    afterNextRender(() => {
      const hero = this.heroElement()?.nativeElement;
      if (!hero) return;

      const observer = new ResizeObserver(() => this.fitTitle());
      observer.observe(hero);
      this.destroyRef.onDestroy(() => observer.disconnect());
      void document.fonts.ready.then(() => this.fitTitle());
    });
  }

  private fitTitle(): void {
    const hero = this.heroElement()?.nativeElement;
    const title = this.titleElement()?.nativeElement;
    if (!hero || !title) return;

    title.style.removeProperty('font-size');

    const heroStyles = getComputedStyle(hero);
    const availableWidth = hero.clientWidth
      - parseFloat(heroStyles.paddingLeft)
      - parseFloat(heroStyles.paddingRight)
      - 16;
    const titleWidth = title.getBoundingClientRect().width + 8;

    if (titleWidth > availableWidth) {
      const baseSize = parseFloat(getComputedStyle(title).fontSize);
      title.style.fontSize = `${baseSize * availableWidth / titleWidth}px`;
    }
  }
}
