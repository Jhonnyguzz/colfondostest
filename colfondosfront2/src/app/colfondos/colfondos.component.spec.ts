import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColfondosComponent } from './colfondos.component';

describe('ColfondosComponent', () => {
  let component: ColfondosComponent;
  let fixture: ComponentFixture<ColfondosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColfondosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColfondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
