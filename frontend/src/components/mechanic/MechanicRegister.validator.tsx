import yup, {
  errorMessages as msg,
  onlyNumbers,
  withUppercaseCharacter,
  withlowercaseCharacter,
} from '@/utils/yupCustomValidations';

export const validationSchema = yup.object().shape({
  lastName: yup.string().required(msg.required),
  firstName: yup.string().required(msg.required),
  email: yup.string().required(msg.required).email(msg.email),
  phone: yup
    .string()
    .required(msg.required)
    .min(8, 'debe tener al menos 8 caracteres')
    .test('only-numbers', msg.onlyNumbers, onlyNumbers),
  document: yup
    .string()
    .required(msg.required)
    .min(8, 'debe tener al menos 8 caracteres')
    .max(8, 'máximo 8 caracteres permitidos')
    .test('only-numbers', msg.onlyNumbers, onlyNumbers),
  password: yup
    .string()
    .min(5, 'debe tener al menos 5 caracteres')
    .required(msg.required)
    .test('pass-uppercase', msg.withUppercaseCharacter, withUppercaseCharacter)
    .test('pass-lowercase', msg.withlowercaseCharacter, withlowercaseCharacter),
});
