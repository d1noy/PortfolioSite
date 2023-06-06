import React from 'react'
import work from './work1.png'
import work2 from './work2.png'
import './Portfolio.css'
export default function Portfolio() {
    return (
        <>
        <div className='portfolio__block'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <img className='portfolio___image' src={work} alt="work" />
        <div className='portfolio__desc'>Сайт по теме автосерсвис - Главная страница</div>
        </div>
        <div className='portfolio__block'>
        <img className='portfolio___image' src={work2} alt="work" />
        <div className='portfolio__desc'>Сайт по теме онлайн курсов Createx - Главная страница</div>
        </div>
        </>
    )
}
