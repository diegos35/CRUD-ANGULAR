import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsFormComponent } from './regions-form.component';

describe('RegionsFormComponent', () => {
  let component: RegionsFormComponent;
  let fixture: ComponentFixture<RegionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
