import { MessageData, SenderData } from '@/types/messages.types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type IMessage = {
	id: string
	chatId: string
	sender: 'me' | 'them'
	text: string
	timestamp: number
}

interface State {
	activeChat: string | null
	messages: IMessage[]
}

interface Actions {
	setActiveChat: (phone: string) => void
	addMessage: (message: IMessage) => void
	addIncomingMessage: (senderData: SenderData, messageData: MessageData) => void
}

const INITIAL_STATE: State = {
	activeChat: null,
	messages: [],
}

export const useChatsStore = create<State & Actions>()(
	persist(
		(set, get) => ({
			...INITIAL_STATE,

			setActiveChat: (phone: string) => {
				set({ activeChat: phone })
			},

			addMessage: (message: IMessage) => {
				set({ messages: [...get().messages, message] })
			},

			addIncomingMessage: (
				senderData: SenderData,
				messageData: MessageData
			) => {
				const { activeChat } = get()
				if (!activeChat) return

				const isFromThem = `${activeChat}@c.us` === senderData.sender
				if (isFromThem) {
					const newMessage: IMessage = {
						id: senderData.chatId,
						chatId: senderData.chatId,
						sender: isFromThem ? 'them' : 'me',
						text: messageData?.textMessageData?.textMessage,
						timestamp: Date.now(),
					}

					set({ messages: [...get().messages, newMessage] })
				}
			},
		}),
		{
			name: 'green-chats',
			storage: createJSONStorage(() => localStorage),
		}
	)
)
