import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lemurian';

  // Show button when scroll position is > 70% of the page
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    console.log('woehfo');

    // Show button if scrolled 70% down
    if (scrollPosition > (scrollHeight - clientHeight) * 0.7) {
      document.getElementById('scrollToTopBtn')!.style.display = 'block';
    } else {
      document.getElementById('scrollToTopBtn')!.style.display = 'none';
    }
  }

  scrollToTop() {
    console.log('Scrolling to top...');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
