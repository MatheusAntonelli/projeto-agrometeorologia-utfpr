import React from 'react'
import  AnchorLink from  'react-anchor-link-smooth-scroll';
import MainSection from '../MainSection';
import Line from '../Line';
import VertChart from '../VertChart';
function MainPage() {
    return (
        <>
        <section id='main'>
            <MainSection></MainSection>  
        </section>
        <section id='intro'>
            <p>dkfghasd</p>
        </section>
        <section id='graphs'>
           <Line></Line>
           <VertChart></VertChart>
        </section>
        <section id=''>

        </section>
        </>
    )
}

export default MainPage
