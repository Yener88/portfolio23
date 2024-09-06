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
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', () => {
        const focusedElement = document.activeElement as HTMLElement;
        if (focusedElement) {
            focusedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  }
  


}