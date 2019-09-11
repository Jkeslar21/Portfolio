import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { TiArrowUpThick } from "react-icons/ti";

export default function Transition({image, dark, home}) {

    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <div className='image'>
                <img src={image} alt='Transitional Image' />
                {home ? null : <h5 onClick={scrollToTop} className={dark ? 'arrow-up-icon-dark' : 'arrow-up-icon'}><TiArrowUpThick /></h5> }
            </div>
            <style jsx>{`
                .image {
                    width: 100%;
                }
                img {
                    width: 100%;
                }
                .arrow-up-icon-dark {
                    display: flex;
                    justify-content: center;
                    color: #e5e7e6;
                    margin-top: -8%;
                    font-size: 4rem;
                    z-index: 50;
                }
                .arrow-up-icon {
                    display: flex;
                    justify-content: center;
                    color: #000c1f;
                    margin-top: -8%;
                    font-size: 4rem;
                    z-index: 50;
                }
                // .light-arrow {
                //     color: #e5e7e6;
                // }
      `}</style>
        </>
    )
}
