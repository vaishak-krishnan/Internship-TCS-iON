import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import {  MatInputModule  } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { ApiService } from './api.service';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { CategoryComponent } from './pages/category/category.component';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { EditcategoryComponent } from './pages/editcategory/editcategory.component';
import { ViewcategoryComponent } from './pages/viewcategory/viewcategory.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';
import { UserAdminHeaderComponent } from './components/user-admin-header/user-admin-header.component';
import { UserAdminCategoryComponent } from './pages/user-admin-category/user-admin-category.component';
import { RootEditComponent } from './pages/root-edit/root-edit.component';
import { AdminEditComponent } from './pages/admin-edit/admin-edit.component';
import { AdminEditCategoryComponent } from './pages/admin-edit-category/admin-edit-category.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminhomeComponent,
    UserhomeComponent,
    UserHeaderComponent,
    AdminHeaderComponent,
    AddPostComponent,
    EditPostComponent,
    UserListComponent,
    AdminListComponent,
    CategoryComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    ViewcategoryComponent,
    UserAdminComponent,
    UserAdminHeaderComponent,
    UserAdminCategoryComponent,
    RootEditComponent,
    AdminEditComponent,
    AdminEditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    Ng2SearchPipeModule
  ],
  providers: [ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

