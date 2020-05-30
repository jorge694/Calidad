import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrofComponent } from './registrof.component';

describe('RegistrofComponent', () => {
  let component: RegistrofComponent;
  let fixture: ComponentFixture<RegistrofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
