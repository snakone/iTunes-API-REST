import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistGridComponent } from './artist-grid.component';

describe('ArtistGridComponent', () => {
  let component: ArtistGridComponent;
  let fixture: ComponentFixture<ArtistGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
