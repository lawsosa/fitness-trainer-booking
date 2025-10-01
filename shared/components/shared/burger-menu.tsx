'use client'

import { Menu } from 'lucide-react'
import { useState } from 'react'

import {
	Navbar,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle
} from '@/shared/components'
import { HeaderButtons } from '@/shared/components/shared/header-buttons'
import { cn } from '@/shared/utils'

interface Props {
	className?: string
}

export function BurgerMenu({ className }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const title = 'Открыть меню'

	return (
		<>
			<Sheet open={isOpen} onOpenChange={() => setIsOpen(false)}>
				<SheetContent>
					<SheetHeader style={{ height: '100%' }}>
						<SheetTitle className='burger-button__navbar__title'>
							Навигация
						</SheetTitle>
						<Navbar className='burger-button__navbar' />
						<HeaderButtons className='burger-button__social' />
					</SheetHeader>
				</SheetContent>
			</Sheet>

			<button
				className={cn(className, 'burger-button')}
				type='button'
				onClick={() => setIsOpen(true)}
				aria-label={title}
				title={title}
			>
				<Menu className='burger-button__menu' />
			</button>
		</>
	)
}
