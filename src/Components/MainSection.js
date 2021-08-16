import React from 'react';
import '../App.css';
import './MainSection.css';
import {Button} from './Button';
import  AnchorLink from  'react-anchor-link-smooth-scroll';

function MainSection() {
    return (
        <div className="main-section">
            <h1>Caracterização Climática e Planejamento de Safra da Cultura</h1>
            <h1>da Cana de Açúcar Para a Cidade de Goiás</h1>
             <p>Aluno: Matheus Antonelli de Oliveira</p>
             <p>RA: 2310627</p>
            <div className="main-btn">
                <AnchorLink href='#graphs'>
                <Button className="btn"
                buttonSize='btn-large'>
                    Continuar
                </Button>
                </AnchorLink>

            </div>
        </div>
    )
}

export default MainSection
