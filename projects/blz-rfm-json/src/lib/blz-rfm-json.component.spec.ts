import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlzRfmJsonComponent } from './blz-rfm-json.component';

describe('BlzRfmJsonComponent', () => {
  let component: BlzRfmJsonComponent;
  let fixture: ComponentFixture<BlzRfmJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlzRfmJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlzRfmJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
