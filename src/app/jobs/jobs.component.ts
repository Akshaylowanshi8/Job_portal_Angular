import { Component } from '@angular/core';
import { JopPortalService } from '../jop-portal.service';
import { Observable } from 'rxjs';
import { Datatype } from '../datatype';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {  
constructor(private _servic:JopPortalService){}

data:Datatype[]=[]


ngOnInit(): void {
  this._servic.GetjobListing().subscribe((res:Datatype[])=>{this.data=res})
}

}
