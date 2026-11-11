import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  readonly categories = CODE_CATEGORIES;
  selectedCategoryId = this.categories[0].id;
  openSubsectionIndex: number | null = this.categories[0].subsections.length > 1 ? 0 : null;

  get selectedCategory(): CodeCategory {
    return this.categories.find((category) => category.id === this.selectedCategoryId) ?? this.categories[0];
  }

  selectCategory(category: CodeCategory): void {
    this.selectedCategoryId = category.id;
    this.openSubsectionIndex = category.subsections.length > 1 ? 0 : null;
  }

  toggleSubsection(index: number): void {
    this.openSubsectionIndex = this.openSubsectionIndex === index ? null : index;
  }
}
