import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzeriaComponent } from './pizzeria.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {OrderComponent} from '../order/order.component';
import {MenuComponent} from '../menu/menu.component';

describe('PizzeriaComponent', () => {
  let component: PizzeriaComponent;
  let fixture: ComponentFixture<PizzeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [ PizzeriaComponent, OrderComponent, MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
