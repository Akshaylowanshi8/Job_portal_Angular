import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { NgModel, NgModelGroup } from '@angular/forms';
import { JobListingComponent } from './job-listing/job-listing.component';
import { FooterComponent } from './footer/footer.component';
import { JopPortalService } from './jop-portal.service';
import { CommonModule } from '@angular/common';
import { Datatype } from './datatype';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserRegistrationComponent,JobListingComponent ,RouterLink ,FooterComponent ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'job_portal';
  data : any;

  
  constructor( public _servic:JopPortalService){ }

  userinfo:any =""

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('role'));
    console.log("this.data----",this.data);
    
  }

  //  (localStorage.getItem("userinfo"))
logout(){
    // localStorage.clear();

    setTimeout(() => {
      
    }, 500);


  }


}

  

