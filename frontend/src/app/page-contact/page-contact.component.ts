import { Component } from '@angular/core';
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { SocialComponent } from "../social/social.component";

@Component({
  selector: 'app-page-contact',
  imports: [ProfileCardComponent, SocialComponent],
  templateUrl: './page-contact.component.html',
  styleUrl: './page-contact.component.css'
})
export class PageContactComponent {

}
