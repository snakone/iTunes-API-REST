import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonSearchbarComponent } from './ion-searchbar.component';

describe('IonSearchbarComponent', () => {
  let component: IonSearchbarComponent;
  let fixture: ComponentFixture<IonSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
