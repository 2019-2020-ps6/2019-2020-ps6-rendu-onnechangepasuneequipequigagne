import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassReponseComponent } from './pass-reponse.component';

describe('PassReponseComponent', () => {
  let component: PassReponseComponent;
  let fixture: ComponentFixture<PassReponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassReponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
