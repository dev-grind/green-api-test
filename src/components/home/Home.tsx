import { useInstance } from '@/hooks/use-instance'
import { useState } from 'react'
import { ActiveChat } from '../active-chat/ActiveChat'
import { Chats } from '../chats/Chats'
import { InstanceModal } from '../instance-modal/InstanceModal'

export function Home() {
	const [isOpenInstanceModal, setIsOpenInstanceModal] = useState(false)
	useInstance(setIsOpenInstanceModal)
	return (
		<>
			<div className='grid w-full z-[10] grid-cols-12 relative pt-6 h-[93dvh]'>
				<Chats />
				<ActiveChat />
			</div>
			{isOpenInstanceModal && (
				<InstanceModal
					isOpen={isOpenInstanceModal}
					setIsOpen={setIsOpenInstanceModal}
				/>
			)}
		</>
	)
}
