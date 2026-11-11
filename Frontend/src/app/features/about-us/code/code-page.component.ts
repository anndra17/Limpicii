import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { CODE_CATEGORIES, type CodeCategory } from './code-content.data';

@Component({
  selector: 'app-code-page',
  imports: [NgTemplateOutlet, TranslatePipe],
  templateUrl: './code-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodePageComponent {
  @ViewChild('selectedContent') private selectedContent?: ElementRef<HTMLElement>;

  readonly categories = CODE_CATEGORIES;
  selectedCategoryId = this.categories[0].id;
  openSubsectionIndices = new Set<number>();

  get selectedCategory(): CodeCategory {
    return this.categories.find((category) => category.id === this.selectedCategoryId) ?? this.categories[0];
  }

  selectCategory(category: CodeCategory): void {
    this.selectedCategoryId = category.id;
    this.openSubsectionIndices = new Set<number>();

    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches) {
      window.requestAnimationFrame(() => {
        this.selectedContent?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  toggleSubsection(index: number): void {
    const openIndices = new Set(this.openSubsectionIndices);
    if (openIndices.has(index)) {
      openIndices.delete(index);
    } else {
      openIndices.add(index);
    }
    this.openSubsectionIndices = openIndices;
  }
}
