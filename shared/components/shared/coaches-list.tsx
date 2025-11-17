import Image from 'next/image'

import { coaches } from '@/shared/assets/coaches'

export function CoachesList() {
	return (
		<>
			<div className='about-coaches-list'>
				{coaches.map(item => (
					<div key={item.id} className='about-coaches-list__content'>
						<Image
							className='about-coaches-list__content__img'
							src={`/img/${item.img}`}
							alt={`Award ${item.id}`}
							width={250}
							height={250}
						/>

						<div className='about-coaches-list__content__text'>
							<h2 className='about-coaches-list__content__text__name'>
								{item.name}
							</h2>

							<div className='about-coaches-list__content__text__block'>
								<h3 className='about-coaches-list__content__text__block__title'>
									{item.title}
								</h3>
								<p className='about-coaches-list__content__text__block__description'>
									{item.description}
								</p>
							</div>

							<div className='about-coaches-list__content__text__block'>
								<h3 className='about-coaches-list__content__text__block__direction-title'>
									{item.directionTitle}
								</h3>
								<p className='about-coaches-list__content__text__block__direction'>
									{item.direction}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
