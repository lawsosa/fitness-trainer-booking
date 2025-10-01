import Image from 'next/image'
import Link from 'next/link'

import { BurgerMenu } from '@/shared/components/shared/burger-menu'
import { Container } from '@/shared/components/shared/container'
import { HeaderButtons } from '@/shared/components/shared/header-buttons'
import { Navbar } from '@/shared/components/shared/navbar'

export function Header() {
	return (
		<>
			<div className='header__wrapper'>
				<Container>
					<div className='header'>
						<div className='header__logo'>
							<Image
								className='header__logo__img'
								src={`/img/sportsman.svg`}
								alt='Error'
								width={85}
								height={85}
							/>
							<Link
								className='header__logo__title'
								href='/'
								aria-label='На главную'
							>
								PrimeFit
							</Link>
						</div>
						<div className='header__pages'>
							<nav className='hidden-tablet'>
								<Navbar />
							</nav>
						</div>
						<HeaderButtons className='hidden-tablet' />

						<BurgerMenu
							className='header__burger-menu visible-tablet'
							aria-lable='Открыть мею'
						/>
					</div>
				</Container>
			</div>
		</>
	)
}
