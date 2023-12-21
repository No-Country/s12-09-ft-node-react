import * as Yup from 'yup';

export const errorMessages = {
  required: 'Este dato es requerido',
  onlyNumbers: 'Se permiten solo números',
  email: 'Debe ingresar un correo electrónico válido',
  withUppercaseCharacter: 'Debe tener al menos una caracter en mayúscula',
  withlowercaseCharacter: 'Debe tener al menos una caracter en minúscula',
};

// * validate function called 'onlyNumbers'
export function onlyNumbers(value: string): boolean {
  const regex = /^\d+$/;
  if (!value.match(regex)) return false;
  return true;
}

// * validate function called 'withlowercaseCharacter'
export function withlowercaseCharacter(value: string): boolean {
  const regex = /^(?=.*[a-z]).+$/;
  if (!value.match(regex)) return false;
  return true;
}

// * validate function called 'withUppercaseCharacter'
export function withUppercaseCharacter(value: string): boolean {
  const regex = /^(?=.*[A-Z]).+$/;
  if (!value.match(regex)) return false;
  return true;
}

// * validate function called 'alphanumericOnly'
export function alphanumericOnly(value: string): boolean {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  if (!value.match(regex)) return false;
  return true;
}

export default Yup;
