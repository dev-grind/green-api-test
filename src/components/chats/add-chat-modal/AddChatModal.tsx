import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useChatsStore } from '@/store/useChatsStore'
import { yupResolver } from '@hookform/resolvers/yup'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { AddChatSchema } from './validation'

type Props = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function AddChatModal({ isOpen, setIsOpen }: Props) {
	const { setActiveChat } = useChatsStore()
	const addChatForm = useForm<{ phone: string }>({
		resolver: yupResolver(AddChatSchema),
		defaultValues: {
			phone: '',
		},
	})

	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = addChatForm
	const onSubmit = (data: { phone: string }) => {
		setActiveChat(data.phone)
		toast.success('Чат успешно добавлен!')
		setIsOpen(false)
	}
	return (
		<Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
			<DialogContent>
				<DialogTitle>Добавление чата</DialogTitle>
				<Form {...addChatForm}>
					<form className='grid gap-4' onSubmit={handleSubmit(onSubmit)}>
						<FormField
							control={control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Номер телефона</FormLabel>
									<FormControl>
										<Input placeholder='Введите номер телефона' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button disabled={!isValid} type='submit'>
							Добавить
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
