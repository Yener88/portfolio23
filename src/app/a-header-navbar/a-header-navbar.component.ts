import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-header-navbar',
  templateUrl: './a-header-navbar.component.html',
  styleUrls: ['./a-header-navbar.component.scss']
})
export class AHeaderNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // beim runter Scrollen fährt die navbar ein und komm wieder beim hochscrollen 
    const navbar = document.getElementById("navbarHide");
    if (navbar) {
      var lastScroll = 0;
      const navbarHeight = window.getComputedStyle(navbar, null).getPropertyValue("height");

      window.onscroll = function () {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
          navbar.style.top = `-${navbarHeight}`;
          navbar.style.boxShadow = "none";
        } else {
          navbar.style.top = "0";
          navbar.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
        }
        lastScroll = currentScroll;
      };
    }
    // Klick öffnet navbar       clickNavbarIgnore MUSS NOCH VERGEBEN WERDEN
    document.body.addEventListener("click", function (event) {
      let target = event.target as HTMLElement;
      if (target.classList.contains("clickNavbarIgnore")) {
        event.stopPropagation();
        return;
      }
      if (navbar) {
        navbar.style.top = "0";
        navbar.style.boxShadow = ('0px 4px 4px rgba(0, 0, 0, 0.25)');
      }
    });
    
  }

  // MOBILE NAVBAR OPEN AND CLOSE FUNKTION
  openAndCloseNavbar() {
    const navbarMenu = document.getElementById('mobileNavbarContent');
    if (navbarMenu) {
      if (navbarMenu.classList.contains('d-none')) {
        navbarMenu.classList.add('slideNavbarOpen');
        navbarMenu.classList.remove('d-none');
        document.documentElement.style.setProperty('overflow-y', 'hidden');
        const animationEnd = function () {
          navbarMenu.classList.remove('slideNavbarOpen');
          navbarMenu.removeEventListener('animationend', animationEnd);
        };
        navbarMenu.addEventListener('animationend', animationEnd);
      } else {
        navbarMenu.classList.add('slideNavbarClose');
        const animationEnd = function () {
          navbarMenu.classList.remove('slideNavbarClose');
          navbarMenu.classList.add('d-none');
          document.documentElement.style.setProperty('overflow-y', 'auto');
          navbarMenu.removeEventListener('animationend', animationEnd);
        };
        navbarMenu.addEventListener('animationend', animationEnd);
      }
    }
  }
  // beim anklicken der links soll das menü geschlosen werden
}