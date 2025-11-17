import Image from 'next/image'

import { coaches } from '@/shared/assets/coaches'
import { Container } from '@/shared/components/shared/container'

export function TopCoaches() {
	return (
		<>
			<div className='top-coaches'>
				<Container>
					<div className='top-coaches__content'>
						<h1 className='top-coaches__content__title'>
							Лучшие тренера в нашем зале на данный момент
						</h1>
						<div className='coaches-list'>
							{coaches.slice(0, 3).map(item => (
								<div
									key={item.id}
									className='top-coaches-list__content'
								>
									<Image
										className='top-coaches-list__content__img'
										src={`/img/${item.img}`}
										alt={`Award ${item.id}`}
										width={350}
										height={350}
									/>

									<h2 className='top-coaches-list__content__name'>
										{item.name}
									</h2>
									<h3 className='top-coaches-list__content__title'>
										{item.title}
									</h3>
									<p className='top-coaches-list__content__description'>
										{item.description}
									</p>
									<h3 className='top-coaches-list__content__direction-title'>
										{item.directionTitle}
									</h3>
									<p className='top-coaches-list__content__direction'>
										{item.direction}
									</p>
								</div>
							))}
						</div>
						<a
							href='/coaches'
							className='top-coaches__content__button'
						>
							Все тренера
						</a>
					</div>
				</Container>
			</div>
		</>
	)
}
