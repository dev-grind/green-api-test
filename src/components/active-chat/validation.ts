import * as yup from 'yup'
export const SendMessageSchema = yup.object().shape({
	message: yup.string().required('Обязательное поле'),
})
