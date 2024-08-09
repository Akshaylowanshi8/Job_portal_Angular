import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RecruitersDeshboardComponent } from './recruiters-deshboard/recruiters-deshboard.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

{path:"",component:HomeComponent },
{path:"home",component:HomeComponent},
{path:"registation",component:UserRegistrationComponent},
{path:"peofile",component:UserProfileComponent},
{path:"desh",component:RecruitersDeshboardComponent},
{path:"job",component:JobListingComponent},
{path:"login",component:LoginComponent}



];
