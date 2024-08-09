import { Component } from '@angular/core';
import { JobListingComponent } from '../job-listing/job-listing.component';
import { JobsComponent } from "../jobs/jobs.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JobListingComponent, JobsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
