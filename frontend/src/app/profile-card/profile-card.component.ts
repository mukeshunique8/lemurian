import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
})
export class ProfileCardComponent {
  profiles = [
    {
      name: 'Priyanka',
      role: 'Client Consultant & Strategist',
      image: '../../assets/images/priyanka.webp',
      email: 'ravi@example.com',
      socialLinks: {
        whatsapp: 'https://wa.me/916363094219',
        instagram: 'https://www.instagram.com/__miss__iconic/',
        twitter: 'https://twitter.com/yourusername',
      },
    },
    {
      name: 'Ravi Varma',
      role: 'Event Director & Field Operations',
      image: '../../assets/images/ravi.jpg',
      email: 'ravi@example.com',
      socialLinks: {
        whatsapp: 'https://wa.me/917448747744',
        instagram: 'https://www.instagram.com/hill_tribe__/',
        twitter: 'https://twitter.com/yourusername',
      },
    },
    {
      name: 'Surya',
      role: ' Content Creator & Photographer',
      image: '../../assets/images/surya.jpg',
      email: 'surya@example.com',
      socialLinks: {
        whatsapp: 'https://wa.me/919566553323',
        instagram: 'https://www.instagram.com/billionairesurya/',
        twitter: 'https://twitter.com/yourusername',
      },
    },
  ];
}
