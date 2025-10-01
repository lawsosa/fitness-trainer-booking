import { User } from 'lucide-react'
import Link from 'next/link'
import { FaTelegram } from 'react-icons/fa'
import { FaVk } from 'react-icons/fa6'

import { cn } from '@/shared/utils'

interface Props {
	className?: string
}

export function HeaderButtons({ className }: Props) {
	return (
		<>
			<div className={cn(className, 'header__buttons')}>
				<a
					className='header__social'
					href='https://t.me/yourchannel'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Наш Telegram'
				>
					<FaTelegram className='header__social__icon' />
				</a>
				<a
					className='header__social'
					href='https://t.me/yourchannel'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Наш Vk'
				>
					<FaVk className='header__social__icon' />
				</a>
				<Link
					className='header__buttons__profile'
					href='/profile'
					aria-label='Профиль'
				>
					<User className='header__buttons__profile__svg' />
				</Link>
			</div>
		</>
	)
}
