import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  signups:any=[]
  id:any;

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.api.getSignupListAdmin().subscribe(res=>{
      this.signups = res;
    })
  }

  refresh(): void {
    window.location.reload();
  }

  removeAdmin(id:any){
    let data ={"_id":id,"status":null}
    this.api.editstatusUser(data).subscribe(res=>{
      alert('Successfully changed admin to user') ;
      this.refresh();
    })
  }

}
