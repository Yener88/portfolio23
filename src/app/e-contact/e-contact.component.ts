import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-e-contact',
  templateUrl: './e-contact.component.html',
  styleUrls: ['./e-contact.component.scss']
})

export class EContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.adjustViewportHeight();
  }

  contactData = {
    name: "",
    email: "",
    message: "",
  };

  mailTest = false;

  post = {
    endPoint: 'https://yener-bas.de/send_mail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

  successMessage: string | null = null;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            this.successMessage = 'Ihre Nachricht wurde erfolgreich gesendet!';
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
            this.successMessage = 'Es gab ein Problem beim Senden Ihrer Nachricht.';
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.successMessage = 'Testmodus aktiviert, Formular wurde zurückgesetzt.';
      ngForm.resetForm();
    }
  }


  adjustViewportHeight(): void {
    window.addEventListener('resize', () => {
      const contactForm = document.querySelector('form') as HTMLFormElement;
      const focusedElement = document.activeElement as HTMLElement;
      const contactTitle = document.querySelector('.contactBorderTitle') as HTMLElement;
      const contactText = document.querySelector('.contactBorderText') as HTMLElement;

      if (contactForm && (focusedElement === contactForm.querySelector('input') || focusedElement === contactForm.querySelector('textarea'))) {
        focusedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

        const viewportWidth = window.innerWidth;

        if (viewportWidth <= 370) {
          contactTitle.style.bottom = '-3315px';
          contactText.style.bottom = '-3560px';
        } else if (viewportWidth <= 1100) {
          contactTitle.style.bottom = '-3453px';
          contactText.style.bottom = '-3670px';
        }

        contactTitle.style.position = 'absolute';
        contactText.style.position = 'absolute';
      }
    });
  }








}