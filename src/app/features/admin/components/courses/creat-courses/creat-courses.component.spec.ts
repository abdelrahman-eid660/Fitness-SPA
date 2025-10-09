import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCoursesComponent } from './creat-courses.component';

describe('CreatCoursesComponent', () => {
  let component: CreatCoursesComponent;
  let fixture: ComponentFixture<CreatCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
