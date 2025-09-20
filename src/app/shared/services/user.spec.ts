import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from '../models/user';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an user', () => {
    const userMock: User = {
      id: 1,
      nome: 'Nome Teste',
      cpf: '123.456.789-12',
      email: 'email@teste.com',
      senha: '@senha_',
      ativo: true,
      observacoes: 'Observações Teste'
    }

    // expect(service.createUser(userMock))
  })
});
