import { AboutGym, TopCoaches, WelcomeSection } from '@/shared/components'
import { Container } from '@/shared/components/shared/container'

export default function Home() {
	return (
		<>
			<WelcomeSection />
			<Container>
				<AboutGym />
			</Container>
			<TopCoaches />
		</>
	)
}
