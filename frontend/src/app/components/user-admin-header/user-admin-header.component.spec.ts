import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminHeaderComponent } from './user-admin-header.component';

describe('UserAdminHeaderComponent', () => {
  let component: UserAdminHeaderComponent;
  let fixture: ComponentFixture<UserAdminHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAdminHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
