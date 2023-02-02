import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {

  constructor(private api : ApiService,private router: Router) { }
  posts:any=[];
  searchText:any;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getPost().subscribe(res=>{
      this.posts =res
    })
  }

  refresh(): void {
    window.location.reload();
  }


  editPost(id: any){
    this.router.navigate(['/adminEdit'],
    {queryParams:{selected:id}}
    )
  }
  deletePost(id:any){
    this.api.deletePost(id).subscribe(res=>{
      this.posts=res;
      alert('Succesfully Deleted')
      this.refresh(); 
    })
  }

}
