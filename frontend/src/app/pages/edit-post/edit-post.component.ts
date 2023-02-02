import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  editpostform:any = new FormGroup({
    'title': new FormControl(''),
    'creator': new FormControl(''),
    'category': new FormControl(''),
    'content': new FormControl(''),
  })
  id:any;
  constructor(private api:ApiService, private router: Router,private routeActivated:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeActivated.queryParams
      .subscribe(params => {
        console.log(params); // { id: "price" }
       this.id = params['selected']
       console.log(this.id); // price
      }
    );
    this.editPostById();
  }

  editPostById(){
    this.api.getSinglePost(this.id).subscribe(res=>{
      this.editpostform.setValue({
        title: res.title,
        creator: res.creator,
        category: res.category,
        content: res.content,
      })
    })
  }
  onSubmit(){
    this.api.editPost(this.id,this.editpostform.value).subscribe(res=>{
      this.router.navigate(['/userhome'])
    })
  }

}
