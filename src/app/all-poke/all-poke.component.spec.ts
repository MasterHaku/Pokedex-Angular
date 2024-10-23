import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPokeComponent } from './all-poke.component';

describe('AllPokeComponent', () => {
  let component: AllPokeComponent;
  let fixture: ComponentFixture<AllPokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllPokeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
