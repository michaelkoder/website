import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphismeComponent } from './graphisme.component';

describe('GraphismeComponent', () => {
  let component: GraphismeComponent;
  let fixture: ComponentFixture<GraphismeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphismeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
