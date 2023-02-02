import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootEditComponent } from './root-edit.component';

describe('RootEditComponent', () => {
  let component: RootEditComponent;
  let fixture: ComponentFixture<RootEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
