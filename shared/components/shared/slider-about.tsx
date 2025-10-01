'use client'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const photoAbout = [
	{ id: 1, img: 'gym1.jpg' },
	{ id: 2, img: 'gym2.jpg' },
	{ id: 3, img: 'gym3.jpg' }
]

export function SliderAbout() {
	const [progress, setProgress] = useState(0)
	const autoplayDelay = 4000
	const startTimeRef = useRef<number>(Date.now())

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			slidesToScroll: 1,
			loop: true,
			duration: 30
		},
		[
			Autoplay({
				delay: autoplayDelay,
				stopOnInteraction: false,
				stopOnMouseEnter: false
			})
		]
	)

	useEffect(() => {
		const updateInterval = 16 // 60 FPS для максимальной плавности

		const timer = setInterval(() => {
			const elapsed = Date.now() - startTimeRef.current
			const newProgress = (elapsed / autoplayDelay) * 100

			if (newProgress >= 100) {
				setProgress(0)
				startTimeRef.current = Date.now()
			} else {
				setProgress(newProgress)
			}
		}, updateInterval)

		return () => clearInterval(timer)
	}, [autoplayDelay])

	// Сброс прогресса при смене слайда
	useEffect(() => {
		if (emblaApi) {
			const onSelect = () => {
				setProgress(0)
				startTimeRef.current = Date.now()
			}

			emblaApi.on('select', onSelect)
			return () => {
				emblaApi.off('select', onSelect)
			}
		}
	}, [emblaApi])

	return (
		<>
			<div className='slider-about__wrapper'>
				<div className='slider-about-embla' ref={emblaRef}>
					<div className='embla__container'>
						{photoAbout.map(award => (
							<div key={award.id} className='embla__slide'>
								<div className='slider-about'>
									<Image
										className='slider-award__img'
										src={`/img/${award.img}`}
										alt={`Award ${award.id}`}
										width={500}
										height={500}
									/>
									<div className='slider-award__progress-bar'>
										<div
											className='slider-award__progress-bar__fill'
											style={{ width: `${progress}%` }}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
