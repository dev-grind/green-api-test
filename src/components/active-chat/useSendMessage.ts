import { messageService } from '@/services/message.service'
import { useChatsStore } from '@/store/useChatsStore'
import { useUserInstance } from '@/store/useUserInstance'
// import { ICreateOrder } from '@/types/order.types'
import { useMutation } from '@tanstack/react-query'
import { UseFormReset } from 'react-hook-form'
import { toast } from 'react-toastify'

export function useSendMessage(
	reset: UseFormReset<{
		message: string
	}>
) {
	const { userInstance } = useUserInstance()
	const { activeChat, addMessage } = useChatsStore()
	const { mutate: create, isPending } = useMutation({
		mutationKey: ['send_message'],
		mutationFn: (data: { message: string }) =>
			messageService.sendMessage(
				`${activeChat}@c.us`,
				data.message,
				String(userInstance?.idInstance),
				String(userInstance?.apiTokenInstance)
			),
		onSuccess: (res, variables) => {
			addMessage({
				id: String(res?.idMessage),
				chatId: `${String(activeChat)}@g.us`,
				sender: 'me',
				text: variables.message,
				timestamp: Date.now(),
			})
			reset()
		},
		onError() {
			toast.error('Что то пошло не так')
		},
	})
	return { create, isPending }
}
