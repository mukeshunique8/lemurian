import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
} from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-upcoming',
  imports: [CommonModule],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UpcomingComponent implements OnInit, AfterViewInit {
  ngOnInit() {}
  slides = [
    { image: '../../assets/images/hero/hero1.jpg', title: 'Slide 1' },
    { image: '../../assets/images/hero/hero1.jpg', title: 'Slide 2' },
    { image: '../../assets/images/hero/hero1.jpg', title: 'Slide 3' },
    { image: '../../assets/images/hero/hero1.jpg', title: 'Slide 4' },
  ];
  ngAfterViewInit(): void {
    const swiperEl: any = document.querySelector('#dynamicSwiper');

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      speed: 9000,
      freeMode: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      on: {
        init() {
          console.log('Swiper initialized!');
        },
      },
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }
}
