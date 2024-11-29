import { Component } from '@angular/core';
import { ServiceListComponent } from "../service-list/service-list.component";
import { HeroComponent } from "../hero/hero.component";
import { UpcomingComponent } from "../upcoming/upcoming.component";

@Component({
  selector: 'app-landing',
  imports: [ServiceListComponent, HeroComponent, UpcomingComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
