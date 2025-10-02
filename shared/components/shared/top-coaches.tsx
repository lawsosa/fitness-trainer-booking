import Image from 'next/image'

import { Container } from '@/shared/components/shared/container'

const topCoaches = [
	{
		id: 1,
		img: 'ronnie-coleman.jpg',
		name: 'Ронни Колеман',
		title: 'Достижения',
		description: 'Обладатель 8 титулов "Мистер Олимпия"'
	},
	{
		id: 2,
		img: 'kevin-mark-levrone.jpg',
		name: 'Кевин Марк Леврон',
		title: 'Достижения',
		description: 'Серебрянный призер "Мистер Олимпия"'
	},
	{
		id: 3,
		img: 'arnold-schwarzenegger.jpg',
		name: 'Арнольд Шварценеггер',
		title: 'Достижения',
		description: 'Обладатель 7 титулов "Мистер Олимпия"'
	}
]

export function TopCoaches() {
	return (
		<>
			<div className='top-coaches'>
				<Container>
					<div className='top-coaches__content'>
						<h1 className='top-coaches__content__title'>
							Лучшие тренера в нашем зале на данный момент
						</h1>
						<div className='about-coaches'>
							{topCoaches.map((item, index) => (
								<div
									key={index}
									className='about-coaches__content'
								>
									<Image
										className='about-coaches__content__img'
										src={`/img/${item.img}`}
										alt={`Award ${item.id}`}
										width={350}
										height={350}
									/>

									<h2 className='about-coaches__content__name'>
										{item.name}
									</h2>
									<h3 className='about-coaches__content__title'>
										{item.title}
									</h3>
									<p className='about-coaches__content__description'>
										{item.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</Container>
			</div>
		</>
	)
}
