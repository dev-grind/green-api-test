import { messageService } from '@/services/message.service'
import { useChatsStore } from '@/store/useChatsStore'
import { useUserInstance } from '@/store/useUserInstance'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

export function useGetMessages() {
	const { userInstance } = useUserInstance()
	const { activeChat, addIncomingMessage } = useChatsStore()

	const { data, isFetching, isSuccess } = useQuery({
		queryKey: ['get_messages', activeChat],
		queryFn: () =>
			messageService.getMessages(
				String(userInstance?.apiUrl),
				String(userInstance?.idInstance),
				String(userInstance?.apiTokenInstance)
			),
		enabled: !!userInstance && !!activeChat,
		refetchInterval: 5000,
	})

	useEffect(() => {
		if (isSuccess && data?.receiptId && data.body.senderData) {
			addIncomingMessage(data.body.senderData, data.body.messageData)
			messageService.delete(
				String(userInstance?.idInstance),
				String(userInstance?.apiTokenInstance),
				String(data.receiptId)
			)
		}
	}, [isSuccess, data, userInstance, addIncomingMessage])

	return { data, isFetching }
}
