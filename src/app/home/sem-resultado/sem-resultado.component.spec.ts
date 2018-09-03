import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemResultadoComponent } from './sem-resultado.component';

describe('SemResultadoComponent', () => {
  let component: SemResultadoComponent;
  let fixture: ComponentFixture<SemResultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemResultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
