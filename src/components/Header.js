import React from 'react'; 

import '../styles/components/Header.css';
import reactLogo from '../assets/img/reactLogo.png';

export default function Header(){
    return (
        <header>
            <img src={reactLogo} alt="React Logo Reedit React" title="Logo Reedit React"/>
            <h1>Reddit React<span>JS</span></h1>
        </header>
    )
}