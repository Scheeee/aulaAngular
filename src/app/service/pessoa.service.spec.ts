import { TestBed } from '@angular/core/testing';
import { PessoaService } from './pessoa.service';

describe('Pessoa', () => {
  let service: PessoaService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaService);
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
