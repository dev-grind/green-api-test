import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	iconLeft?: React.ReactNode
	iconRight?: React.ReactNode
	placeholder?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ iconLeft, iconRight, className, type, placeholder, ...props }, ref) => {
		return (
			<div className='relative'>
				{iconLeft && (
					<div className='cursor-pointer w-fit absolute top-1/2 left-[12px] -translate-y-1/2'>
						{iconLeft}
					</div>
				)}
				<input
					type={type}
					placeholder={placeholder ?? 'Введите'}
					className={cn(
						'border-[1px] text-sm outline-none border-border rounded-[4px] pt-[8px] pb-[8px]  pr-[12px] w-full dark:text-dark disabled:bg-disabled_bg disabled:text-disabled focus:border-primary',
						iconLeft ? 'pl-[48px]' : 'pl-[12px]',
						iconRight ? 'pr-[48px]' : 'pr-[12px]',
						className
					)}
					ref={ref}
					{...props}
				/>
				{iconRight && (
					<div className='cursor-pointer w-fit absolute top-1/2 right-[12px] -translate-y-1/2'>
						{iconRight}
					</div>
				)}
			</div>
		)
	}
)
Input.displayName = 'Input'

export { Input }
