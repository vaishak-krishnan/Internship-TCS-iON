import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminCategoryComponent } from './user-admin-category.component';

describe('UserAdminCategoryComponent', () => {
  let component: UserAdminCategoryComponent;
  let fixture: ComponentFixture<UserAdminCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdminCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
