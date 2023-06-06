import React from 'react'
import './Main.css'
import code from './code.png'
export default function Main() {
    return (
        <>
            <div className='hero'>

                <div className="hero__title">Даниил <br /> Чукарин</div>
                <div className="hero__descr">Frontend-developer <br /> 15yo, Rostov-on-don</div>
                <div className="hero__lang">RU | ENG</div>
            </div>
            <img className='code' src={code} alt="code" />
        </>
    )
}
