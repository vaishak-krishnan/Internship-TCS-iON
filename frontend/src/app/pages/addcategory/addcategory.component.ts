import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  addcategoryform:any = new FormGroup({
    'name': new FormControl(''),
    'description': new FormControl('')
  })


  constructor(private router: Router, private api :ApiService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.api.addCategory(this.addcategoryform.value).subscribe({
      complete:()=>{
        alert('New category is added')
      }
    })
    this.router.navigate(['/category'])
  }

}
