import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-footer',
  templateUrl: './f-footer.component.html',
  styleUrls: ['./f-footer.component.scss']
})
export class FFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  openPolicy() {
    const policy = document.getElementById('policy');
    if (policy) {
      policy.classList.add('slide-up');
      policy.classList.remove('d-none');
      document.documentElement.style.setProperty('overflow-y', 'hidden');
    }
  }

  closePolicy() {
    const policy = document.getElementById('policy');
    if (policy) {
      policy.classList.add('d-none');
      document.documentElement.style.setProperty('overflow-y', 'auto');
    }
  }

}
