import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTreeComponent } from './parent-tree.component';

describe('ParentTreeComponent', () => {
  let component: ParentTreeComponent;
  let fixture: ComponentFixture<ParentTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentTreeComponent]
    });
    fixture = TestBed.createComponent(ParentTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
