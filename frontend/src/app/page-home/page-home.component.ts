import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { UpcomingComponent } from "../upcoming/upcoming.component";
import { ServiceListComponent } from "../service-list/service-list.component";

@Component({
  selector: 'app-page-home',
  imports: [HeroComponent, UpcomingComponent, ServiceListComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export class PageHomeComponent {

}
