import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl:String="http://localhost:7000/api";

  signup(user:any){
    console.log(user)
    return this.http.post<any>(`${this.apiUrl}/signup`,user)
     }

  login(user:any){
    return this.http.post<any>(`${this.apiUrl}/login`,user);
  }

  loggedIn(){
    return !! localStorage.getItem('token');
  }
  
  getUserToken(){
    return  localStorage.getItem('token');
  }

  getPost(){
    return this.http.get(`${this.apiUrl}/listcontent`)
  }

  addPost(data:any){
    return this.http.post<any>(`${this.apiUrl}/addcontent`, data)
  }

  getSinglePost(id:any){
    return this.http.get<any>(`${this.apiUrl}/singlecontent/${id}`)
  }

  editPost(id:any,data:any)
  {
    return this.http.put(`${this.apiUrl}/editcontent/${id}`,data)
  }

  deletePost(id:any)
  {
    return this.http.delete(`${this.apiUrl}/deletecontent/${id}`)
  }

  getSignupList(){
    return this.http.get(`${this.apiUrl}/listsignup`)
  }
  getSignupListAdmin(){
    return this.http.get(`${this.apiUrl}/listsignupadmin`)
  }
  editstatus(data:any){
    return this.http.put(`${this.apiUrl}/statusupdate`,data)
  }
  editstatusUser(data:any){
    return this.http.put(`${this.apiUrl}/statusupdateUser`,data)
  }
  getCategory(){
    return this.http.get(`${this.apiUrl}/listcategory`)
  }

  addCategory(data:any){
    return this.http.post<any>(`${this.apiUrl}/addcategory`, data)
  }

  getSingleCategory(id:any){
    return this.http.get<any>(`${this.apiUrl}/singlecategory/${id}`)
  }

  editCategory(id:any,data:any)
  {
    return this.http.put(`${this.apiUrl}/editcategory/${id}`,data)
  }

  deleteCategory(id:any)
  {
    return this.http.delete(`${this.apiUrl}/deletecategory/${id}`)
  }

  
}
