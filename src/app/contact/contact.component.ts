import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    nama: new FormControl('', Validators.required),
    pesan: new FormControl('', Validators.required),
  });

  send() {
    if (!this.contactForm.valid) {
      alert('Field Kamu tidak Valid!');
      return;
    }
    alert(JSON.stringify(this.contactForm.value));
  }
}
