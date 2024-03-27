import './SwiperButtons.css'
import { GrNext , GrPrevious} from "react-icons/gr";
import { useSwiper } from 'swiper/react';

function SwiperButtons (){
    const swiper = useSwiper()
    return(
        <>
            <div className="swiperBtns">
                <button onClick={()=> swiper.slidePrev()}><GrNext size='25px'/></button>
                <button onClick={()=> swiper.slideNext()}><GrPrevious size='25px' /></button>
            </div>
        </>
    )
}

export default SwiperButtons