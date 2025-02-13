import { useChatsStore } from '@/store/useChatsStore'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserCircle2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { Message } from './Message'
import { useGetMessages } from './useGetMessages'
import { useSendMessage } from './useSendMessage'
import { SendMessageSchema } from './validation'

export function ActiveChat() {
	const navigation = useNavigate()
	const { activeChat, messages } = useChatsStore()
	const sendMessageForm = useForm<{ message: string }>({
		resolver: yupResolver(SendMessageSchema),
		defaultValues: {
			message: '',
		},
	})

	const { control, handleSubmit, reset } = sendMessageForm
	const { create } = useSendMessage(reset)
	useGetMessages()

	const onSubmit = (data: { message: string }) => {
		create(data)
	}
	const onDeleteInstance = () => {
		localStorage.removeItem('user-instance')
		localStorage.removeItem('green-chats')
		navigation(0)
	}
	return (
		<div className='col-span-8 bg-[#f0f2f5] h-[94vh] flex flex-col '>
			<Button onClick={onDeleteInstance}>Удалить инстанс и токен</Button>

			{activeChat ? (
				<>
					<div className='bg-gray-200 text-xl flex gap-3 items-center px-4 py-6'>
						<UserCircle2 />
						{activeChat}
					</div>

					<div className='bg-[#efeae2] flex-1 overflow-y-auto p-4 space-y-2 h-full'>
						{messages.length > 0 ? (
							messages.map((message, index) => (
								<Message message={message} index={index} />
							))
						) : (
							<p className='text-gray-500 text-center'>Сообщений пока нет</p>
						)}
					</div>

					<Form {...sendMessageForm}>
						<form
							className='p-4 bg-gray-200 grid gap-4'
							onSubmit={handleSubmit(onSubmit)}
						>
							<FormField
								control={control}
								name='message'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Input placeholder='Введите сообщение' {...field} />
										</FormControl>
									</FormItem>
								)}
							/>
							<Button type='submit'>Отправить сообщение</Button>
						</form>
					</Form>
				</>
			) : (
				<div className='text-center text-2xl font-semibold py-9'>
					Добавьте чат
				</div>
			)}
		</div>
	)
}
