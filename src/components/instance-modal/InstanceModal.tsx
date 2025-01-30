import { yupResolver } from '@hookform/resolvers/yup'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

import { useUserInstance } from '@/store/useUserInstance'
import { toast } from 'react-toastify'
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTitle,
} from '../ui/alert-dialog'
import { Button } from '../ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { createInstanceSchema } from './validation'

type Props = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
type CreateInstance = {
	idInstance: string
	apiTokenInstance: string
}

export function InstanceModal({ isOpen, setIsOpen }: Props) {
	const { setUserInstance } = useUserInstance()
	const instanceForm = useForm<CreateInstance>({
		mode: 'all',
		resolver: yupResolver(createInstanceSchema),
		defaultValues: {
			idInstance: '',
			apiTokenInstance: '',
		},
	})
	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = instanceForm
	const onSubmit = (data: CreateInstance) => {
		setUserInstance(data)
		toast.success('Instance успешно добавлен!')
	}
	return (
		<AlertDialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
			<AlertDialogContent>
				{' '}
				<AlertDialogTitle className='font-semibold !text-center'>
					Введите данные с Green-api
				</AlertDialogTitle>
				<Form {...instanceForm}>
					<form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
						<FormField
							control={control}
							name='idInstance'
							render={({ field }) => (
								<FormItem>
									<FormLabel>idInstance</FormLabel>
									<FormControl>
										<Input placeholder='Введите idInstance' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={control}
							name='apiTokenInstance'
							render={({ field }) => (
								<FormItem>
									<FormLabel>apiTokenInstance</FormLabel>
									<FormControl>
										<Input placeholder='Введите apiTokenInstance' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button disabled={!isValid} type='submit'>
							Сохранить
						</Button>
					</form>
				</Form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
