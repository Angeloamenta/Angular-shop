import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleshopComponent } from './singleshop.component';

describe('SingleshopComponent', () => {
  let component: SingleshopComponent;
  let fixture: ComponentFixture<SingleshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleshopComponent]
    });
    fixture = TestBed.createComponent(SingleshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
