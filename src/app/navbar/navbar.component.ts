import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  scroy: any;

  constructor(private router: Router) { }


  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goWatchlist() {
    this.router.navigate(['/watchlist']);
  }

  
  scrollEvent = (event: any): void => {
    this.scroy = event.srcElement.scrollingElement.scrollTop;

    var scrollpos = this.scroy;
    var header = document.getElementById("header");
    var navcontent = document.getElementById("nav-content");
    var navaction = document.getElementById("navAction");
    var toToggle = document.querySelectorAll(".toggleColour");

    document.addEventListener("scroll", function () {

    scrollpos = window.scrollY;

    if (scrollpos > 10) {
      header?.classList.add("bg-white");
      navaction?.classList.remove("bg-white");
      navaction?.classList.add("gradient");
      navaction?.classList.remove("text-gray-800");
      navaction?.classList.add("text-white");

      for (var i = 0; i < toToggle.length; i++) {
        toToggle[i].classList.add("text-gray-800");
        toToggle[i].classList.remove("text-white");
      }
      header?.classList.add("shadow");
      navcontent?.classList.remove("bg-gray-100");
      navcontent?.classList.add("bg-white");
    } else {
      header?.classList.remove("bg-white");
      navaction?.classList.remove("gradient");
      navaction?.classList.add("bg-white");
      navaction?.classList.remove("text-white");
      navaction?.classList.add("text-gray-800");

      for (var i = 0; i < toToggle.length; i++) {
        toToggle[i].classList.add("text-white");
        toToggle[i].classList.remove("text-gray-800");
      }

      header?.classList.remove("shadow");
      navcontent?.classList.remove("bg-white");
      navcontent?.classList.add("bg-gray-100");
    }
    });
  }

}
