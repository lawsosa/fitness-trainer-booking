import { navLink } from '@/shared/components/shared/navigation'
import { cn } from '@/shared/utils'

interface Props {
	className?: string
}

export function Navbar({ className }: Props) {
	return (
		<>
			<ul className={cn(className, 'header__pages__navbar')}>
				{navLink.map(link => (
					<a href={link.link} key={link.id}>
						<li className='header__pages__navbar__item'>
							{link.name}
						</li>
					</a>
				))}
			</ul>
		</>
	)
}
