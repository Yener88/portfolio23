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

  successMessage: string | null = null; // Variable für Erfolgsnachricht

  ngOnInit(): void {
    this.preventScrollOnKeyboard(); // Aufruf der Funktion zum Verhindern des Scrollens
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            this.successMessage = 'Ihre Nachricht wurde erfolgreich gesendet!'; // Setze Erfolgsnachricht
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
            this.successMessage = 'Es gab ein Problem beim Senden Ihrer Nachricht.'; // Fehlernachricht
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.successMessage = 'Testmodus aktiviert, Formular wurde zurückgesetzt.';
      ngForm.resetForm();
    }
  }

  // Funktion zum Verhindern des Layout-Verschiebens beim Öffnen der mobilen Tastatur
  preventScrollOnKeyboard(): void {
    let initialHeight = window.innerHeight;

    window.addEventListener('resize', () => {
      const currentHeight = window.innerHeight;

      // Wenn die Höhe des Viewports geringer ist, bedeutet dies, dass die Tastatur angezeigt wird
      if (currentHeight < initialHeight) {
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden'; // verhindert das Scrollen
      } else {
        // Wenn die Tastatur wieder ausgeblendet wird, entferne den fixierten Zustand
        document.body.style.position = '';
        document.body.style.overflow = '';
      }
    });
  }
}
