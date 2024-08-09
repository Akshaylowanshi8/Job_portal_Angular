import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { JopPortalService } from '../jop-portal.service';
@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule] ,
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'] // Corrected
})
export class UserRegistrationComponent implements OnInit {


  constructor( public _jobservice:JopPortalService){}
  jobSeekerForm !: FormGroup;
  recruiterForm !: FormGroup;

  currentForm: string = 'recruiter' 

  ngOnInit() {
    // Manually create FormControl instances
    this.jobSeekerForm = new FormGroup({
      role: new FormControl('jobSeeker', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    this.recruiterForm = new FormGroup({
      role: new FormControl('recruiter', Validators.required),
      username : new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }
  showForm(formType: string) {
    this.currentForm = formType;
  }

  onSubmitJobSeeker() {
    if (this.jobSeekerForm.valid) {
      this._jobservice.Registruser(this.jobSeekerForm.value).subscribe((res:any)=>{
console.log("usercreate");
      })
      console.log(this.jobSeekerForm.value);
    }
  }

  onSubmitRecruiter() {
    if (this.recruiterForm.valid) {
      this._jobservice.Registruser(this.recruiterForm.value).subscribe((res:any)=>{
        console.log("usercreate");
              })
      console.log(this.recruiterForm.value);
    }
  }
}
