import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectionTitleComponent } from '../../../app/shared/components/section-title/section-title.component';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, SectionTitleComponent],
  template: `
  <section class="section">
    <div class="container" style="max-width:720px">
      <app-section-title title="Contact Us" subtitle="Tell us about your challenge and we'll get back to you." />
      @if (sent()) {
        <div class="alert alert-success">Thank you! We'll be in touch shortly.</div>
      }
      <form [formGroup]="form" (ngSubmit)="submit()" class="row g-3">
        <div class="col-md-6">
          <input class="form-control" placeholder="Full name" formControlName="name"
                 [class.is-invalid]="form.controls.name.touched && form.controls.name.invalid">
        </div>
        <div class="col-md-6">
          <input class="form-control" placeholder="Email" formControlName="email"
                 [class.is-invalid]="form.controls.email.touched && form.controls.email.invalid">
        </div>
        <div class="col-12">
          <textarea class="form-control" rows="5" placeholder="Message" formControlName="message"
                    [class.is-invalid]="form.controls.message.touched && form.controls.message.invalid"></textarea>
        </div>
        <div class="col-12"><button class="btn btn-primary px-4" [disabled]="form.invalid">Send</button></div>
      </form>
    </div>
  </section>`,
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  sent = signal(false);
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit() {
    if (this.form.invalid) return;
    // TODO: call your API here (put the HTTP call in a ContactService under core/services)
    this.sent.set(true);
    this.form.reset();
  }
}