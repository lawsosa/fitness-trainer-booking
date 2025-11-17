import { CoachesList } from '@/shared/components'

export function Coaches() {
	return (
		<div className='coaches'>
			<div className='coaches__content'>
				<h2 className='coaches__content__title'>
					Весь тренерский состав нашего зала
				</h2>
				<CoachesList />
			</div>
		</div>
	)
}
