import React, { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Youtube from 'react-youtube';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}


const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRed, emblaApi] = useEmblaCarousel(options)
  const [slidesInView, setSlidesInView] = useState<number[]>([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const updateSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === emblaApi.slideNodes().length) {
        emblaApi.off('slidesInView', updateSlidesInView)
      }
      const inView = emblaApi
        .slidesInView()
        .filter((index) => !slidesInView.includes(index))
      return slidesInView.concat(inView)
    })
  }, [])

  const opts = {
    playerVars: {
    playsinline: 1,
    controls: 1,       
    autoplay: 1,
    mute: 1,
    rel:0,
    }, 
  }

  useEffect(() => {
    if (!emblaApi) return

    updateSlidesInView(emblaApi)
    emblaApi.on('slidesInView', updateSlidesInView)
    emblaApi.on('reInit', updateSlidesInView)
  }, [emblaApi, updateSlidesInView])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRed}>
        <div className="embla__container">
          <Youtube videoId="M2Zm9JT4cUs" opts={opts} className="embla_iframe" />
          <Youtube videoId="nl9WikoK8hU" opts={opts} className="embla_iframe" />
          <Youtube videoId="Q1rShU0lM0g" opts={opts} className="embla_iframe" />
          <Youtube videoId="65SET8xj6Ro" opts={opts} className="embla_iframe" />
          <Youtube videoId="T3S0gqxXjWY" opts={opts} className="embla_iframe" />
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
