import React from 'react'

export default function Transition({image}) {
    return (
        <>
            <div className='image'>
                <img src={image} alt='Transitional Image' />
            </div>
            <style jsx>{`
                .image {
                    width: 100%;
                }
                img {
                    width: 100%;
                }
      `}</style>
        </>
    )
}
