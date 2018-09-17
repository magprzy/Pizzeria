import { TestBed, inject } from '@angular/core/testing';

import { OrderSummaryService } from './order-summary.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('OrderSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      providers: [OrderSummaryService]
    });
  });

  it('should be created', inject([OrderSummaryService], (service: OrderSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
