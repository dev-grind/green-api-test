import * as yup from 'yup'
export const AddChatSchema = yup.object().shape({
	phone: yup.string().required('Обязательное поле'),
})
