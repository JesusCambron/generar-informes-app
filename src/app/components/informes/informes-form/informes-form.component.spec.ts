import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesFormComponent } from './informes-form.component';

describe('InformesFormComponent', () => {
  let component: InformesFormComponent;
  let fixture: ComponentFixture<InformesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
