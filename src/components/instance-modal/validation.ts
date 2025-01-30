import * as yup from 'yup'
export const createInstanceSchema = yup.object().shape({
	apiTokenInstance: yup.string().required('Обязательное поле'),
	idInstance: yup.string().required('Обязательное поле'),
})
