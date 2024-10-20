import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAddverComponent } from './home-addver.component';

describe('HomeAddverComponent', () => {
  let component: HomeAddverComponent;
  let fixture: ComponentFixture<HomeAddverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAddverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAddverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
