import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const ButtonSlider = ({ contsainerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();

    return (
        <div className={contsainerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconStyles}/>
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className={iconStyles}/>
            </button>
        </div>
    )
}

export default ButtonSlider