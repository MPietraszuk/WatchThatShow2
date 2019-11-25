import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyAiringComponent } from './currently-airing.component';

describe('CurrentlyAiringComponent', () => {
  let component: CurrentlyAiringComponent;
  let fixture: ComponentFixture<CurrentlyAiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentlyAiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyAiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
