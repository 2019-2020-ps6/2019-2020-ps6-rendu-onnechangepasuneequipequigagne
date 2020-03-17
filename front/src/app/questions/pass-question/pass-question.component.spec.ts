import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassQuestionComponent } from './pass-question.component';

describe('PassQuestionComponent', () => {
  let component: PassQuestionComponent;
  let fixture: ComponentFixture<PassQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
