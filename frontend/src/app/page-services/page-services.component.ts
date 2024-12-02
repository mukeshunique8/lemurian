import { Component } from '@angular/core';
import { ServiceListComponent } from "../service-list/service-list.component";

@Component({
  selector: 'app-page-services',
  imports: [ServiceListComponent],
  templateUrl: './page-services.component.html',
  styleUrl: './page-services.component.css'
})
export class PageServicesComponent {

}
