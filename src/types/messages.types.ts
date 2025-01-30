export interface IMessageBody {
	typeWebhook: string
	instanceData: InstanceData
	timestamp: number
	idMessage: string
	senderData: SenderData
	messageData: MessageData
}

export interface InstanceData {
	idInstance: number
	wid: string
	typeInstance: string
}

export interface SenderData {
	chatId: string
	chatName: string
	sender: string
	senderName: string
	senderContactName: string
}

export interface MessageData {
	typeMessage: string
	textMessageData: TextMessageData
}

export interface TextMessageData {
	textMessage: string
}
