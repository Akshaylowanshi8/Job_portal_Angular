import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerProfilesComponent } from './seeker-profiles.component';

describe('SeekerProfilesComponent', () => {
  let component: SeekerProfilesComponent;
  let fixture: ComponentFixture<SeekerProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekerProfilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeekerProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
