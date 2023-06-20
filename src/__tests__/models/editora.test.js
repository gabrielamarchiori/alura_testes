/* eslint-disable linebreak-style */
import {
  describe, expect, it, jest,
} from '@jest/globals';
import Editora from '../../models/editora.js';

describe('Testando o modelo Editora', () => {
  const objetoEditora = {
    nome: 'Defaux',
    cidade: 'Vitória',
    email: 'de@mail.com',
  };
  it('Deve instanciar uma nova editora', () => {
    const editora = new Editora(objetoEditora);

    expect(editora).toEqual(expect.objectContaining(objetoEditora));
  });

  it('Deve fazer uma chamada simulada ao BD', () => {
    const editora = new Editora(objetoEditora);

    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: 'Defaux',
      cidade: 'Vitória',
      email: 'de@mail.com',
      created_at: '2022-10-01',
      updated_at: '2022-10-01',
    });

    const retorno = editora.salvar();

    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });
});
