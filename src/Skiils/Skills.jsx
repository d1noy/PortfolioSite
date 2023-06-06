import React from 'react'
import './Skills.css'
import work from './work.png'
import figma from './figma.png'
import js from './js.png'
import react from './react.png'
export default function Skills() {

    return (
        <>
        <h2 className='skills__title'>
            Навыки
        </h2>
        <div className='skills__descr'>Я работаю в этих программах</div>
        <section className='skills__icons'>
            <img className='icons__list' src={work} alt="" />
            <img className='icons__list'src={js} alt="" />
            <img className='icons__list' src={react} alt="" />
            <img className='icons__list' src={figma} alt="" />
        </section>
        </>
    )
}
