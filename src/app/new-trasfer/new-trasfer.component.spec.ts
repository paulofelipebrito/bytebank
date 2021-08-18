import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrasferComponent } from './new-trasfer.component';

describe('NewTrasferComponent', () => {
  let component: NewTrasferComponent;
  let fixture: ComponentFixture<NewTrasferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTrasferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrasferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
