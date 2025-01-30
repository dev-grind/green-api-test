import { Home } from '@/components/home/Home'

export function HomePage() {
	return (
		<div className='bg-primary-light relative h-[100dvh]'>
			<div className='h-[80px] bg-primary w-full absolute top-0 left-0 '></div>
			<div className=' px-[30px] mx-auto'>
				<Home />
			</div>
		</div>
	)
}
