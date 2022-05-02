import { TestBed } from '@angular/core/testing';

import { BlockUIInterceptor } from './block-ui.interceptor';

describe('BlockUIInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BlockUIInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BlockUIInterceptor = TestBed.inject(BlockUIInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
