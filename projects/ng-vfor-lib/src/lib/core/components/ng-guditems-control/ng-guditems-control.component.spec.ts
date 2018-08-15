import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGUDItemsControlComponent } from './ng-guditems-control.component';

describe('NgGUDItemsControlComponent', () => {
  let component: NgGUDItemsControlComponent;
  let fixture: ComponentFixture<NgGUDItemsControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGUDItemsControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGUDItemsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
