import { TestBed, inject } from '@angular/core/testing';

import { DishesListService } from './dishes-list.service';

describe('DishesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishesListService]
    });
  });

  it('should be created', inject([DishesListService], (service: DishesListService) => {
    expect(service).toBeTruthy();
  }));
});
