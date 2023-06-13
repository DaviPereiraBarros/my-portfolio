import React from "react";
import Header from '../../components/header/navbar'
import 'tailwindcss/tailwind.css';
import '../../src/app/globals.css';
import Games from "../../components/games/apresentationGames";

export default function AdventureFox()
{
    return(  
        <>
        <Header/>
        <Games title={'Adventure Fox'} description={'Adventure Fox, foi o meu primeiro projeto desenvolvido do gênero plataforma, em que foi inspirado no clássico Mário World. Ganhei bastante experiência em jogos 2D e principalmente na linguagem C#.'} genero={'Plataforma'} plataforma='Desktop' linkGitHub='' idVideo={"gK0JdPG0RJU"} Messege={"DEMO"}/>
       </>
    )
}