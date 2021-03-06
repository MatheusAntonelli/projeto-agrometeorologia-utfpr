import React from 'react'
import MainSection from '../MainSection';
import Line from '../Line';
import VertChart from '../VertChart';
import AtmPression from '../AtmPression';
import UmidadeRelativa from '../UmidadeRelativa';
import RainHistory from '../RainHistory';
import Evaporation from '../Evaporation';
function MainPage() {
    return (
        <>
        <section id='main'>
            <MainSection></MainSection>  
        </section>
        <section id='intro'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
        <section id='graphs'>
           <Line></Line>
           <AtmPression></AtmPression>
           <Evaporation></Evaporation>
           <UmidadeRelativa></UmidadeRelativa>
           <RainHistory></RainHistory>
           <VertChart></VertChart>
           

        </section>
        <section id=''>

        </section>
        </>
    )
}

export default MainPage
