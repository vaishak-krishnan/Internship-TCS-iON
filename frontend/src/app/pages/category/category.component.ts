import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router :Router, private api : ApiService) { }
  categorys:any=[];
  searchText:any;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getCategory().subscribe(res=>{
      this.categorys =res
    })
  }

  addcategory(){
    this.router.navigate(['/addcategory']);
  }

  updatecategory(id:any){
    this.router.navigate(['/editcategory'],
    {queryParams:{selected:id}}
    )
  }

  refresh(): void {
    window.location.reload();
  }

  deletecategory(id:any){
    this.api.deleteCategory(id).subscribe(res=>{
      this.categorys=res;
      alert('Succesfully Deleted')
      this.refresh(); 
  })

}
}
