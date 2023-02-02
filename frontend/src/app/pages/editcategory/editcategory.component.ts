import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  editcategoryform:any = new FormGroup({
    'name': new FormControl(''),
    'description': new FormControl('')
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
    this.editCategoryById();
  }

  editCategoryById(){
    this.api.getSingleCategory(this.id).subscribe(res=>{
      this.editcategoryform.setValue({
        name: res.name,
        description: res.description
      })
    })
  }
  onSubmit(){
    this.api.editCategory(this.id,this.editcategoryform.value).subscribe(res=>{
      this.router.navigate(['/category'])
    })
  }

}
