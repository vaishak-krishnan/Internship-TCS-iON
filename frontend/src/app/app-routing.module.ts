import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { CategoryComponent } from './pages/category/category.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { EditcategoryComponent } from './pages/editcategory/editcategory.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { ViewcategoryComponent } from './pages/viewcategory/viewcategory.component';
import { AuthGuard } from './auth.guard';
import { UserAdminCategoryComponent } from './pages/user-admin-category/user-admin-category.component';
import { RootEditComponent } from './pages/root-edit/root-edit.component';
import { AdminEditComponent } from './pages/admin-edit/admin-edit.component';
import { AdminEditCategoryComponent } from './pages/admin-edit-category/admin-edit-category.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'addpost',component:AddPostComponent},
  {path:'editpost',component:EditPostComponent},
  {path:'userlist',component:UserListComponent},
  {path:'adminlist',component:AdminListComponent},
  {path:'category',component:CategoryComponent},
  {path:'addcategory',component:AddcategoryComponent},
  {path:'editcategory',component:EditcategoryComponent},
  {path:'viewcategory',component:ViewcategoryComponent},
  {path:'userAdmin',component:UserAdminComponent},
  {path:'userAdminCategory',component:UserAdminCategoryComponent},
  {path:'rootEdit',component:RootEditComponent},
  {path:'adminEdit',component:AdminEditComponent},
  {path:'adminEditCategory',component:AdminEditCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
