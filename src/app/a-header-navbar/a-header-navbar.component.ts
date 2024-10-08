import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-header-navbar',
  templateUrl: './a-header-navbar.component.html',
  styleUrls: ['./a-header-navbar.component.scss']
})
export class AHeaderNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Beim Runter- und Hochscrollen fährt die Navbar ein
    const navbar = document.getElementById("navbarHide");
    if (navbar) {
      var lastScroll = 0;
      var isNavbarOpen = true; // Hält den Status der Navbar (geöffnet oder eingefahren)

      window.onscroll = function () {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
          // Wenn nach unten gescrollt wird (Scroll-Richtung ist nach unten)
          if (isNavbarOpen) {
            navbar.style.top = `-${getNavbarHeight()}px`;
            navbar.style.boxShadow = "none";
            isNavbarOpen = false;
          }
        } else {
          // Wenn nach oben gescrollt wird (Scroll-Richtung ist nach oben)
          if (!isNavbarOpen) {
            navbar.style.top = "0";
            navbar.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
            isNavbarOpen = true;
          }
        }
        lastScroll = currentScroll;
      };
    }

    // Klick öffnet Navbar und fährt sie ein
    document.body.addEventListener("click", function (event) {
      let target = event.target as HTMLElement;
      if (target.classList.contains("clickNavbarIgnore")) {
        event.stopPropagation();
        return;
      }
      if (navbar) {
        if (isNavbarOpen) {
          navbar.style.top = `-${getNavbarHeight()}px`;
          navbar.style.boxShadow = "none";
          isNavbarOpen = false;
        } else {
          navbar.style.top = "0";
          navbar.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
          isNavbarOpen = true;
        }
      }
    });


    // Funktion zur Berechnung der Navbar-Höhe
    function getNavbarHeight() {
      const navbar = document.getElementById("navbarHide");
      if (navbar) {
        return navbar.offsetHeight;
      }
      return 0; // Standardwert, wenn das Element nicht gefunden wird
    }

    // Fügen Sie diese Funktion hinzu, um die Navbar zu überprüfen und zu schließen
    function checkAndCloseNavbar() {
      const navbar = document.getElementById("navbarHide");
      if (navbar) {
        if (isNavbarOpen = true) {
          navbar.style.top = `-${getNavbarHeight()}px`;
          navbar.style.boxShadow = "none";
          isNavbarOpen = false;
        }
      }
    }

    // Rufen Sie checkAndCloseNavbar nach einem kurzen Timer auf
    document.addEventListener("DOMContentLoaded", function () {
      const navbarLinks = document.querySelectorAll(".checkNavbarUp");
      navbarLinks.forEach(function (href) {
        href.addEventListener("click", function () {
          setTimeout(checkAndCloseNavbar, 1400); // Hier können Sie die Verzögerungszeit nach Bedarf anpassen (in Millisekunden)
        });
      });
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

  // Translate funktion
  openAndCloseLanguage() {
    const languageMenu = document.getElementById('languagebtn');
    if (languageMenu) {
      if (languageMenu.classList.contains('d-none')) {
        languageMenu.classList.add('slideLanguageOpen');
        languageMenu.classList.remove('d-none');
        const animationEnd = function () {
          languageMenu.classList.remove('slideLanguageOpen');
          languageMenu.removeEventListener('animationend', animationEnd);
        };
        languageMenu.addEventListener('animationend', animationEnd);
      } else {
        languageMenu.classList.add('slideLanguageClose');
        const animationEnd = function () {
          languageMenu.classList.remove('slideLanguageClose');
          languageMenu.classList.add('d-none');
          languageMenu.removeEventListener('animationend', animationEnd);
        };
        languageMenu.addEventListener('animationend', animationEnd);
      }
    }
  }

  getElById(id: any, text: any) {  // this.getElById('trans',``);
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = `${text}`;
    }
  }

  // ################# TRANSLATE FUNCTION #################

  clickLanguageDE() {
    this.getElById('trans1', `Über mich`);
    this.getElById('trans3', `Portfolio`);
    this.getElById('trans2', `Skills`);
    this.getElById('trans4-1', `Ich bin`);
    this.getElById('trans4-2', `FRONTEND ENTWICKLER`);
    this.getElById('trans5', `Schreib mir!`);
    this.getElById('trans6', `Scroll runter`);
    this.getElById('trans7', `Über mich`);
    this.getElById('trans8', `Hallo, ich bin ein Frontend-Entwickler aus Köln. Nach der Schule habe ich eine Ausbildung im IT-Bereich absolviert und insgesamt etwa 9 Jahre Berufserfahrung gesammelt. Um meine Leidenschaft zum Beruf zu machen, habe ich im August 2022 den Intensivkurs an der Developer Academy absolviert.`);
    this.getElById('trans9', `Zur Schulzeit habe ich meine ersten Erfahrungen gemacht und war bereits an verschiedenen Arten von Soft- und Hardware interessiert.`);
    this.getElById('trans10', `Mit 15 Jahren programmierte ich meine erste Homepage basierend auf HTML/CSS, die wie ein soziales Medienprofil aufgebaut war.`);
    this.getElById('trans11-1', `Skills`);
    this.getElById('trans11', `Ich habe Erfahrung in Projekten mit verschiedenen Frontend-Technologien und Konzepten gesammelt.`);
    this.getElById('trans12', `In Kontakt treten`);
    this.getElById('trans13', `Diese Seite ist eine Beispiel meiner Arbeit! Hier ist ein Teil meiner Projekte anzusehen.`);
    this.getElById('trans14', `Das Index der Pokemon! Das auf API basierte Pokedex mit erweiterten Funktionen wie in der Suche alle Pokemon zu finden, zu favorisieren und zu verwalten.`);
    this.getElById('trans16', `El Pollo Loco ist ein humorvolles Jump-and-Run Spiel, das mit objektorientiertem JavaScript erstellt wurde.`);
    this.getElById('trans17', `Team Table ist ein Tool, mit dem Du Deine Arbeit organisieren und effizienter gestalten kannst, ähnlich einem Kanban-Board.`);
    this.getElById('trans18', `Das beliebte Kartenspiel in einem Online-Desktop-Format, welches mehreren Benutzern ermöglicht, gleichzeitig auf verschiedenen Geräten zu spielen.`);
    this.getElById('trans19', `Live-Test`);
    this.getElById('trans20', `Live-Test`);
    this.getElById('trans21', `Live-Test`);
    this.getElById('trans22', `Live-Test`);
    this.getElById('trans23', `Portfolio`);
    this.getElById('trans24', `Willst Du ein Problem lösen?`);
    this.getElById('trans25', `Kontaktiere mich über dieses Formular. Ich möchte mit meiner Arbeit zu Deinen Projekten beitragen.
    <br><br>
    Brauchst Du einen Frontend-Entwickler? <a href="mailto:yener.bas@outlook.de" style="text-decoration: none; color: white; font-weight: bold; cursor: pointer;" 
    onpointerenter="this.setAttribute('style', 'color: blue; color: #e86f00; text-decoration: none; font-weight: bold;')" 
    onpointerleave="this.setAttribute('style', 'color: red; color: white; text-decoration: none; font-weight: bold;')">Kontaktiere mich!</a>`);
    const placeholderName = document.getElementById('name');
    if (placeholderName) {
      placeholderName.setAttribute('placeholder', 'Dein Name');
    }
    const placeholderMessage = document.getElementById('message');
    if (placeholderMessage) {
      placeholderMessage.setAttribute('placeholder', 'Deine Nachricht');
    }
    const placeholderMail = document.getElementById('email');
    if (placeholderMail) {
      placeholderMail.setAttribute('placeholder', 'Deine E-Mail Adresse');
    }
    this.getElById('trans26', `Kontakt`);
    this.getElById('trans27', `Impressum`);
    this.getElById('trans28', `Senden`);
    this.getElById('trans29', `Yener Bas`);
    this.getElById('trans29-1', `Yener Bas 2023`);
    this.getElById('trans30', `Über mich`);
    this.getElById('trans31', `Skills`);
    this.getElById('trans32', `Portfolio`);
    this.getElById('trans33', `Kontakt`);
    this.openAndCloseNavbar();
    document.documentElement.style.setProperty('overflow-y', 'auto');
  }

  clickLanguageEN() {
    this.getElById('trans1', `About me`);
    this.getElById('trans3', `Portfolio`);
    this.getElById('trans2', `Skills`);
    this.getElById('trans4-1', `I am`);
    this.getElById('trans4-2', `FRONTEND DEVELOPER`);
    this.getElById('trans5', `Let's talk!`);
    this.getElById('trans6', `Scroll down`);
    this.getElById('trans7', `About me`);
    this.getElById('trans8', `Hi, I am a Frontend developer based in Cologne, Germany. After school, I completed an apprenticeship in IT and gained a total of around 8 years of professional experience. To turn my passion into a profession, I completed the intensive course at the Developer Academy in August 2022.`);
    this.getElById('trans9', `When I was at school, I made my first experience and was already very interested in software and hardware of different kinds of electronics.`);
    this.getElById('trans10', `At the age of 15, I programmed my first homepage which was built like a social media profile about myself based on HTML/CSS.`);
    this.getElById('trans11-1', `Skills`);
    this.getElById('trans11', `I have gained experience in building projects with various frontend technologies and concepts.`);
    this.getElById('trans12', `Get in touch`);
    this.getElById('trans13', `This page is a sample of my work! Please fell free to try them.`);
    this.getElById('trans14', `Index of Pokemon, API based Pokedex! With extensive details and advanced functions such as finding, favoring and managing all Pokemon in the search.`);
    this.getElById('trans16', `El Pollo Loco is a humorous jump-and-run game created using object-oriented JavaScript and serving as an introduction to Angular development.`);
    this.getElById('trans17', `Team Table is a tool used to organize and improve the efficiency of your work, similar
        to a Kanban Board.`);
    this.getElById('trans18', `The popular card game available in an online, desktop format, allowing multiple users to play on various devices simultaneously.`);
    this.getElById('trans19', `Live test`);
    this.getElById('trans20', `Live test`);
    this.getElById('trans21', `Live test`);
    this.getElById('trans22', `Live test`);
    this.getElById('trans23', `Portfolio`);
    this.getElById('trans24', `Got a problem to solve?`);
    this.getElById('trans25', `Contact me through this form, I am interested in hearing you, knowing your ideas and contributing to your projects with my work.
        <br><br>
        Need a Frontend developer? <a href="mailto:yener.bas@outlook.de" 
        style="text-decoration: none; color: white; font-weight: bold; cursor: pointer;" 
        onpointerenter="this.setAttribute('style', 'color: blue; color: #e86f00; text-decoration: none; font-weight: bold;')" 
        onpointerleave="this.setAttribute('style', 'color: red; color: white; text-decoration: none; font-weight: bold;')">Contact me!</a>`);
    const placeholderName = document.getElementById('name');
    if (placeholderName) {
      placeholderName.setAttribute('placeholder', 'Your name');
    }
    const placeholderMessage = document.getElementById('message');
    if (placeholderMessage) {
      placeholderMessage.setAttribute('placeholder', 'Your message');
    }
    const placeholderMail = document.getElementById('email');
    if (placeholderMail) {
      placeholderMail.setAttribute('placeholder', 'Your E-mail address');
    }
    this.getElById('trans26', `Contact`);
    this.getElById('trans27', `Imprint`);
    this.getElById('trans28', `Send`);
    this.getElById('trans29', `Yener Bas`);
    this.getElById('trans29-1', `Yener Bas 2023`);
    this.getElById('trans30', `About me`);
    this.getElById('trans31', `Skills`);
    this.getElById('trans32', `Portfolio`);
    this.getElById('trans33', `Contact`);
    this.openAndCloseNavbar();
    document.documentElement.style.setProperty('overflow-y', 'auto');
  }

  clickLanguageTR() {
    this.getElById('trans1', `Hakkimda`);
    this.getElById('trans3', `Portfolyo`);
    this.getElById('trans2', `Skills`);
    this.getElById('trans4-1', `ben`);
    this.getElById('trans4-2', `FRONTEND DEVELOPER`);
    this.getElById('trans5', `Konuşalım!`);
    this.getElById('trans6', `Aşağı kaydır`);
    this.getElById('trans7', `Hakkımda`);
    this.getElById('trans8', `Merhaba, ben Köln Almanya'da yerleşik bir Frontend geliştiriciyim. Okuldan sonra, IT alanında bir eğitim aldım ve toplamda yaklaşık 8 yıl profesyonel deneyim kazandım. Tutkumu meslek haline getirmek için, Ağustos 2022'de Developer Academy'de Frontend kursunu tamamladım.`);
    this.getElById('trans9', `Okul sırasında, ilk deneyimlerimi yaptım ve farklı türlerdeki elektronik cihazlarını çok ilgi duyuyordum.`);
    this.getElById('trans10', `15 yaşında, HTML/CSS temelinde kendi hakkında bir sosyal medya profili inşa ettim ve böylece ilk web sayfamı programladım.`);
    this.getElById('trans11-1', `Skills`);
    this.getElById('trans11', `Çeşitli frontend teknolojileri ve kavramları ile projelerin inşa etmekte deneyim kazandım.`);
    this.getElById('trans12', `İletişim kurmak`);
    this.getElById('trans13', `Bu sayfa işlerimin bir örneğidir! Diğer geliştirdiğim projeleri görmek için aşağı kaydırın.`);
    this.getElById('trans14', `Pokemon Endeksi, API tabanlı Pokedex! Aramada tüm Pokemon'u bulma, favorilere ekleme ve yönetme gibi kapsamlı ayrıntılar.`);
    this.getElById('trans16', `El Pollo Loco, JavaScript kullanılarak oluşturulan ve Angular geliştirmeye giriş gören komik bir zıpla ve koş oyunudur.`);
    this.getElById('trans17', `Team Table, işinizi organize etmeniz ve verimliliğinizi arttırmak için kullanabileceğiniz bir araçtır, Kanban Board benzeri.`);
    this.getElById('trans18', `Masaüstü biçiminde sunulan ve birden çok kullanıcının aynı anda çeşitli cihazlarda oynamasına olanak tanıyan popüler kart oyunu.`);
    this.getElById('trans19', `Canlı test`);
    this.getElById('trans20', `Canlı test`);
    this.getElById('trans21', `Canlı test`);
    this.getElById('trans22', `Canlı test`);
    this.getElById('trans23', `Portfolyo`);
    this.getElById('trans24', `Çözülecek bir sorunun var mı?`);
    this.getElById('trans25', `Bu form aracılığıyla bana ulaşın, fikirlerinizi duymak, bilmek ve projelerinize çalışmam ile katkıda bulunmak ilgileniyorum.
        <br><br>
        Bir frontend geliştiricisi mi lazım? <a href="mailto:yener.bas@outlook.de" 
        style="text-decoration: none; color: white; font-weight: bold; cursor: pointer;" 
        onpointerenter="this.setAttribute('style', 'color: blue; color: #e86f00; text-decoration: none; font-weight: bold;')" 
        onpointerleave="this.setAttribute('style', 'color: red; color: white; text-decoration: none; font-weight: bold;')">Benimle iletişime geçin!</a>`);
    const placeholderName = document.getElementById('name');
    if (placeholderName) {
      placeholderName.setAttribute('placeholder', 'Adınız');
    }
    const placeholderMessage = document.getElementById('message');
    if (placeholderMessage) {
      placeholderMessage.setAttribute('placeholder', 'buraya Mesajınızı yazın');
    }
    const placeholderMail = document.getElementById('email');
    if (placeholderMail) {
      placeholderMail.setAttribute('placeholder', 'E-posta adresiniz');
    }
    this.getElById('trans26', `İletişim`);
    this.getElById('trans27', `Künye`);
    this.getElById('trans28', `Gönder`);
    this.getElById('trans29', `Yener Baş`);
    this.getElById('trans29-1', `Yener Baş 2023`);
    this.getElById('trans30', `Hakkimda`);
    this.getElById('trans31', `Beceriler`);
    this.getElById('trans32', `Portföy`);
    this.getElById('trans33', `İletişim`);
    this.openAndCloseNavbar();
    document.documentElement.style.setProperty('overflow-y', 'auto');
  }
}
