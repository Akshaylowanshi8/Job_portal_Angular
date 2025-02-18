// job-listing.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JopPortalService } from '../jop-portal.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})
export class JobListingComponent implements OnInit {

  job: any[] = [];
  filteredJobs: any[] = [];
  searchForm: FormGroup;
  noResults: boolean = false; // Flag to show "No results found" message

  constructor(private _jobService: JopPortalService, private fb: FormBuilder) {
    // Initialize the form group
    this.searchForm = this.fb.group({
      keyword: ['']
    });
  }

  ngOnInit(): void {

    this._jobService.GetjobListing().subscribe((res: any) => {
      this.job = res;
      this.filteredJobs = this.job;
      this.searchForm.valueChanges.subscribe(() => this.filterJobs());
    });
  }
  filterJobs() {
    const keyword = this.searchForm.get('keyword')?.value.toLowerCase();
    this.filteredJobs = this.job.filter((job: any) =>
      !keyword || 
      job.title.toLowerCase().includes(keyword) ||
      job.description.toLowerCase().includes(keyword) ||
      job.location.toLowerCase().includes(keyword) ||
      job.industry.toLowerCase().includes(keyword) ||
      job.type.toLowerCase().includes(keyword)
    );
    this.noResults = this.filteredJobs.length === 0;
  }
}
