import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuizzesComponent } from './edit-quizzes.component';

describe('EditQuizzesComponent', () => {
  let component: EditQuizzesComponent;
  let fixture: ComponentFixture<EditQuizzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuizzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
