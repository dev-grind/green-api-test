import { IMessage } from '@/store/useChatsStore'
import clsx from 'clsx'
import { format } from 'date-fns'

type Props = {
	message: IMessage
	index: number
}
export function Message({ message, index }: Props) {
	return (
		<div
			key={`${message.id}+${message.text}+${index}`}
			className={clsx(
				'w-fit p-3 rounded-lg shadow-md',
				message.sender === 'me'
					? 'bg-primary-light text-black self-end ml-auto'
					: 'bg-white text-black self-start mr-auto'
			)}
		>
			{message.text}
			<span className='block text-xs text-gray-600 mt-1 text-right'>
				{format(new Date(message.timestamp), 'HH:mm')}
			</span>
		</div>
	)
}
