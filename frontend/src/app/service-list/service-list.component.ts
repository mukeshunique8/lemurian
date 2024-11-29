import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-list',
  imports: [CommonModule],
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css'],
})
export class ServiceListComponent implements OnInit {
  services: any[] = [];
  data: any[] = [];

  constructor(private servicesService: ServicesService) {}
  

  ngOnInit(): void {
    // Fetch all services on component initialization
    this.servicesService.getServices().subscribe(
      
      {
        next:(data: any)=> {
          this.services = data;
          console.log(data);
        },
        error(error) {
          console.error('Error fetching services:', error);
        },
      }
    );
  }
}
