import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-contact-page',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
  submitted = false;

  submit(form: NgForm): void {
    if (form.invalid) return;

    const { name, email, subject, message } = form.value;
    const body = `${message}\n\n${email}`;
    const mailto = `mailto:limpicii.bv@gmail.com?subject=${encodeURIComponent(subject || 'Mesaj de pe site')}&body=${encodeURIComponent(`Nume: ${name}\nEmail: ${email}\n\n${body}`)}`;
    window.location.href = mailto;
    this.submitted = true;
    form.resetForm();
  }
}
