import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.scss']
})
export class AHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Foto Rechts-Klick gesperrt!!
    let fotos = document.getElementsByTagName('img');
    for (var i = 0; i < fotos.length; i++) {
      (function (index) {
        fotos[index].addEventListener("contextmenu", (event) => {
          event.preventDefault();
          console.log("Right Click on picture: " + index + " blocked!!!");
        })
      })(i);
    }   
  }
}

