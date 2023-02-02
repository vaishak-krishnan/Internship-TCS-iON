import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {

  constructor(private router :Router, private api : ApiService) { }
  categorys:any=[];
  searchText:any;

  ngOnInit(): void {
    this.getData();
  }

  refresh(): void {
    window.location.reload();
  }

  getData(){
    this.api.getCategory().subscribe(res=>{
      this.categorys =res;
    })
  }
}
