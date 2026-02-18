import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private toastr = inject(ToastrService);
  isLoading = signal(false);

  sendEmail(e: Event) {
    e.preventDefault();
    this.isLoading.set(true);

    emailjs.sendForm(
      'service_44jhqx5',
      'template_1npdvdg',
      e.target as HTMLFormElement,
      'OBqWSu5kM1y_T4803'
    ).then(
      () => {
        this.toastr.success('Message sent successfully', 'SUCCESS 🚀');
        (e.target as HTMLFormElement).reset(); // reset form
        this.isLoading.set(false);
      },
      (error) => {
        console.error(error);
        this.toastr.error('System synchronization failed', 'ERROR ❌');
        this.isLoading.set(false);
      }
    );
  }
}