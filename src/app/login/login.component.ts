import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, } from '@angular/router';
import { JopPortalService } from './../jop-portal.service';
import Swal from 'sweetalert2';
import { Datatype } from '../datatype';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule ,RouterLink],
templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor( public _service:JopPortalService,  private routes:Router){ }
  data:Datatype[] = []



  ngOnInit(): void {
    this._service.GetAllUser().subscribe((res:Datatype[])=>{
    // console.log(res);
    this.data = res
    })
  }

  
loginfun(password:string,username:string){

      console.log(this.data)
      const user = this.data.find(user => user.username === username);

      console.log(user);
      if (user) {
        if (user.password === password) {
          Swal.fire('Thank you...', 'Login succesfully!', 'success')
          localStorage.setItem("useremail",user.email,)
          localStorage.setItem("username",user.username )
          localStorage.setItem("role",user.role)
          localStorage.setItem("useremail",user.email,)
    this.routes.navigateByUrl("home")
          setTimeout(() => {
            window.location.reload()
          }, 2000);
        }
         else {
          Swal.fire(
            'Cancelled',
            'Incorrect password:)',
            'error'
          )
          return false; 
        }
      } else {
        Swal.fire(
          'Cancelled',
          'Username not found:)',
          'error'
        )
      
        return false; 
      }
    
      return
    }
}
