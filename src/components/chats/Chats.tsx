import { useChatsStore } from '@/store/useChatsStore'
import { Plus, UserCircle2 } from 'lucide-react'
import { useState } from 'react'
import { AddChatModal } from './add-chat-modal/AddChatModal'

export function Chats() {
	const [isOpenAddChat, setIsOpenAddChat] = useState(false)
	const { activeChat } = useChatsStore()
	return (
		<>
			<aside className='col-span-4 p-4 bg-white h-full '>
				<div className='flex w-full justify-between mb-6'>
					<h1 className='text-2xl'>Chats</h1>
					{!activeChat && (
						<Plus
							onClick={() => setIsOpenAddChat(true)}
							className='cursor-pointer'
						/>
					)}
				</div>
				<div className='flex gap-4 flex-col  '>
					{activeChat ? (
						<div
							// onClick={() => setActiveChat(chat)}
							className={`flex gap-3 text-xl items-center justify-center border-b border-b-gray-200   bg-gray-200 transition-all   cursor-pointer py-3 `}
						>
							<UserCircle2 />
							{activeChat}
						</div>
					) : (
						<div className='text-center text-xl font-semibold'>
							Нет добавленных чатов
						</div>
					)}
				</div>
			</aside>
			{isOpenAddChat && (
				<AddChatModal isOpen={isOpenAddChat} setIsOpen={setIsOpenAddChat} />
			)}
		</>
	)
}
