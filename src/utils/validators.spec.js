import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validators utils', () => {
  it('Should give an error with empty payload ', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('Should give an error with less than 3 characters payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisade no mínimo 3 caracteres')
  })

  it('Should return true when imput passa a correct param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })

  it('Should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('Should give an error with a invalid param', () => {
    expect(validateEmptyAndEmail('myemail@')).toBe('*Este campo precisa ser um e-mail')
  })

  it('Should return true when pass a correct param', () => {
    expect(validateEmptyAndEmail('rodolfo@rodolfo.com')).toBe(true)
  })
})
