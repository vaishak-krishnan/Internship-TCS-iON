import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

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
    this.router.navigate(['/editpost'],
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
