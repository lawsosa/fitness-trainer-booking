import { SliderAbout } from '@/shared/components'
import { Container } from '@/shared/components/shared/container'

const aboutGymList = [
	[
		{
			id: 1,
			text: 'Индивидуальные тренировки с сертифицированными тренерами'
		},
		{
			id: 2,
			text: 'Групповые занятия: функциональный тренинг, йога, пилатес, кроссфит'
		},
		{ id: 3, text: 'Персональные программы питания и консультации по ЗОЖ' }
	],
	[
		{
			id: 4,
			text: 'Кардио-зона и силовой зал с современным оборудованием'
		},
		{ id: 5, text: 'Детские и подростковые секции' },
		{ id: 6, text: 'SPA и массаж для восстановления после тренировок' }
	],
	[
		{ id: 7, text: 'Онлайн-запись и гибкая система абонементов' },
		{ id: 8, text: 'Фитнес-тестирование и диагностика физической формы' },
		{
			id: 9,
			text: 'Кафе здоровья с ассортиментом спортивного питания и полезных напитков'
		}
	]
]

export function AboutGym() {
	return (
		<>
			<Container>
				<div className='about-gym'>
					<div className='about-gym__hero'>
						<div className='about-gym__content'>
							<div className='about-gym__content__about'>
								<h1 className='about-gym__content__about__title'>
									В крации о стренажерном зале PrimeFit:
								</h1>
								<p className='about-gym__content__about__description'>
									PrimeFit — современный фитнес-центр для тех,
									кто ценит качество, комфорт и результат. У
									нас просторные, светлые залы и новейшее
									оборудование для всех видов тренировок.
									Команда профессиональных тренеров поможет
									подобрать индивидуальную программу и
									поддержит на каждом этапе. Мы предлагаем
									дружелюбную атмосферу, гибкие абонементы и
									всё необходимое для эффективных и приятных
									занятий спортом.
								</p>
							</div>
							<SliderAbout />
						</div>
					</div>
					<div className='about-gym__content__list'>
						<h1 className='about-gym__content__list__title'>
							Описание услуг:
						</h1>
						<ul>
							{aboutGymList.map((arr, index) => (
								<div
									key={index}
									className='about-gym__content__list__column'
								>
									{arr.map((item, index) => (
										<div
											key={index}
											className='about-gym__content__list__item'
										>
											{item.text}
										</div>
									))}
								</div>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</>
	)
}
