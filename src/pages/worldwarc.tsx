import React from "react";
import 'tailwindcss/tailwind.css';
import '../../src/app/globals.css';
import Header from '../../components/header/navbar'
import Games from "../../components/games/apresentationGames";

export default function WorldWarC()
{
    return(
     <>
     <Header/>
     <Games title={'World War C'} description={'World War C foi utilizado para o meu TCC na escola Firjan Sesi/Senai, em que a proposta foi de criar um jogo educativo que conseguisse entreter o público acima de tudo. Com o cenário atual da pandemia, o grupo pensou em trazer uma forma mais leve e divertida para conscientizar a sociedade sobre a importância da vacinação. No contexto do jogo, o mundo foi infectado por um vírus, Allan (personagem principal) é o único que tem a chance de salvar as pessoas através das fórmulas para criar as vacinas. '} genero={'Plataforma/Educacional'} plataforma='Desktop' linkGitHub='' idVideo={'xQmUPOEFyvU'} Messege={'DEMO'}/>
    </>
    )
}