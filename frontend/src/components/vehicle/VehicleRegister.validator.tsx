import yup, {
  errorMessages as msg,
  onlyNumbers,
} from '@/utils/yupCustomValidations';

export const validationSchema = yup.object().shape({
  brand: yup.string().required(msg.required),
  model: yup.string().required(msg.required),
  color: yup.string().required(msg.required),
  year: yup
    .string()
    .required(msg.required)
    .min(4, 'debe tener al menos 4 caracteres')
    .max(4, 'limite de caracteres permitidos')
    .test('only-numbers', msg.onlyNumbers, onlyNumbers),
  licensePlate: yup.string().required(msg.required),
  mileage: yup
    .string()
    .required(msg.required)
    .max(6, 'limite de caracteres permitidos'),
  userId: yup.string().required(msg.required),
});
