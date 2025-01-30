import { IUserInstance } from '@/types/user.types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IUseUserInstance {
	userInstance: IUserInstance | null
	setUserInstance: (data: IUserInstance) => void
}
export const useUserInstance = create<IUseUserInstance>()(
	persist(
		set => ({
			userInstance: null,
			setUserInstance: (data: IUserInstance) => {
				set(() => ({
					userInstance: data,
				}))
			},
		}),
		{
			name: 'user-instance',
		}
	)
)
