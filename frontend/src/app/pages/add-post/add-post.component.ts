import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addpostform:any = new FormGroup({
    'title': new FormControl(''),
    'creator': new FormControl(''),
    'category': new FormControl(''),
    'content': new FormControl(''),
  })

  constructor(private router: Router, private api:ApiService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.api.addPost(this.addpostform.value).subscribe({
      complete:()=>{
        alert('New post added')
      }
    })
    this.router.navigate(['/userhome'])
  }

}
