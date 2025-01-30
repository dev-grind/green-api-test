import { useUserInstance } from '@/store/useUserInstance'
import { Dispatch, SetStateAction, useEffect } from 'react'

export const useInstance = (
	setIsOpenInstanceModal: Dispatch<SetStateAction<boolean>>
) => {
	const { userInstance } = useUserInstance()
	useEffect(() => {
		if (!userInstance) {
			setIsOpenInstanceModal(true)
		} else {
			setIsOpenInstanceModal(false)
		}
	}, [userInstance])
}
