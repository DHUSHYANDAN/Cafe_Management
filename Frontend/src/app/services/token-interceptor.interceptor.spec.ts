import { TestBed } from '@angular/core/testing';

import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';

describe('TokenInterceptorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TokenInterceptorInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: TokenInterceptorInterceptor = TestBed.inject(
      TokenInterceptorInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
