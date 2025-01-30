import { axiosClassic } from '@/interceptors/interceptors'
import { IMessageBody } from '@/types/messages.types'
export type IGetMessageResponse = {
	body: IMessageBody
	receiptId: number
}
export const messageService = {
	async sendMessage(
		chatId: string,
		message: string,
		idInstance: string,
		apiTokenInstance: string
	) {
		const response = await axiosClassic.post(
			`https://7103.api.greenapi.com
/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
			{ chatId: chatId, message: message }
		)
		return response.data
	},
	async getMessages(idInstance: string, apiTokenInstance: string) {
		const response = await axiosClassic.get<IGetMessageResponse>(
			`https://7103.api.greenapi.com
/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
		)
		return response.data
	},
	async delete(
		idInstance: string,
		apiTokenInstance: string,
		receiptId: string
	) {
		const response = await axiosClassic.delete(
			`https://7103.api.greenapi.com
/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`
		)
		return response.data
	},
}
