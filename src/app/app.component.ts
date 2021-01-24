import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  isMobile = false;
  menuItems: string[] = ['Top Games', 'New Games', 'Slots', 'Jackpots', 'Live', 'Blackjack', 'Roulette', 'Table', 'Poker', 'Other'];
  selectedLink;

  @ViewChild('navHeadings') navLinks: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event && event.currentTarget.innerWidth > 1280) {
      this.isMobile = false;
    } else {
      this.navLinks.nativeElement.style.display = "none";
      this.isMobile = true;
    }
  }
  
  ngAfterViewInit() {
    this.selectedLink = this.menuItems[1];
    this.toggleNav();
  }

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  toggleNav() {
    if (this.navLinks.nativeElement.style.display === "block"|| this.navLinks.nativeElement.style.display === "") {
      this.navLinks.nativeElement.style.display = "none";
    } else {
      this.navLinks.nativeElement.style.display = "block";
    }
  }

  getLink(item) {
    console.log(item);
    debugger;
  }
}
