import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ContactService } from '../../../app/core/services/contact.service';
import { SectionTitleComponent } from '../../../app/shared/components/section-title/section-title.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SectionTitleComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  sending = signal(false);
  sent = signal(false);

  toast = signal<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  form = this.fb.nonNullable.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ],
    ],

    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[+]?[0-9\s\-()]{8,20}$/),
      ],
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.maxLength(255),
      ],
    ],

    message: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5000),
      ],
    ],
  });

  submit(): void {
    this.sent.set(false);

    if (this.form.invalid) {
      this.form.markAllAsTouched();

      this.showToast(
        'error',
        'Please check the highlighted fields and try again.'
      );

      return;
    }

    this.sending.set(true);

    this.contactService
      .sendContact(this.form.getRawValue())
      .subscribe({
        next: response => {
          this.sending.set(false);
          this.sent.set(true);

          this.form.reset();

          this.showToast(
            'success',
            response.message || 'Your message has been sent successfully.'
          );
        },

        error: error => {
          this.sending.set(false);

          console.error(
            'Failed to send contact message:',
            error
          );

          let message =
            'Something went wrong. Please try again later.';

          if (error?.error?.message) {
            message = error.error.message;
          }

          this.showToast('error', message);
        },
      });
  }

  dismissToast(): void {
    this.toast.set(null);
  }

  private showToast(
    type: 'success' | 'error',
    message: string
  ): void {
    this.toast.set({
      type,
      message,
    });

    setTimeout(() => {
      this.toast.set(null);
    }, 5000);
  }
}