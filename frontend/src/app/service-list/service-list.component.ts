import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceListComponent implements OnInit, AfterViewInit {
  services: any[] = [
    {
      title: 'Wedding',
      image: '../../assets/images/events/Wedding.jpg',
      desc: 'A celebration of love! Let us help capture your perfect wedding day with breathtaking decor and photography.',
    },
    {
      title: 'Engagement',
      image: '../../assets/images/events/Engagement.jpg',
      desc: 'The moment you say yes is unforgettable. We’re here to help make it picture-perfect with stunning decor and photography.',
    },
    {
      title: 'Anniversary',
      image: '../../assets/images/events/Anniversary.jpg',
      desc: 'Celebrate your love story with elegant decor and stunning photos that will last a lifetime.',
    },
    {
      title: 'Baby Shower',
      image: '../../assets/images/events/Baby.jpg',
      desc: 'Celebrate the arrival of your little one with delightful decor and precious memories captured on film.',
    },
    {
      title: 'Bridal Shower',
      image: '../../assets/images/events/Bridal.jpg',
      desc: 'Pamper the bride-to-be with a beautiful bridal shower, complete with exquisite decor and photo-worthy moments.',
    },
    {
      title: 'Corporate Event',
      image: '../../assets/images/events/Corporate.jpg',
      desc: 'Host your next corporate event with professional decor and flawless photography that reflects your brand.',
    },
    {
      title: 'Outdoor Event',
      image: '../../assets/images/events/Outdoor.jpg',
      desc: "Whether it's a picnic, festival, or a garden party, we offer the perfect outdoor event decor and photography.",
    },
    {
      title: 'Birthday Party',
      image: '../../assets/images/events/Birthday.jpg',
      desc: 'Celebrate in style! We offer custom decor and photography services to make your birthday party unforgettable.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // No need for an API call, static data is used directly
  }

  ngAfterViewInit(): void {
    const swiperEl: any = document.querySelector('#serviceSwiper'); // Get the Swiper container element

    const swiperParams = {
      slidesPerView: 2,
      spaceBetween: 10,
      // loop: true,
      // speed: 2000,
      // freeMode: true,
      // autoplay: {
      //   delay: 0,
      //   disableOnInteraction: false,
      // },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      effect: 'coverflow',
      grabCursor: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        clickable: true,
      },
      on: {
        init() {
          console.log('Swiper initialized!');
        },
      },
    };

    Object.assign(swiperEl, swiperParams); // Apply parameters to the swiper element
    swiperEl.initialize(); // Initialize the Swiper instance
  }
}
