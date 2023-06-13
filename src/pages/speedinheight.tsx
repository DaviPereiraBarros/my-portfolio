import React from "react";
import 'tailwindcss/tailwind.css';
import '../../src/app/globals.css';
import Header from '../../components/header/navbar'
import Games from "../../components/games/apresentationGames";

export default function SpeedInHeight()
{
    return(
        <>
        <Header/>
        <Games title={'Speed In Height'} description={'Primeiro jogo de corrida 3D. Obtive bastante experiência nas ferramentas da Unity, como: Física, Colisões, etc. Além da programação, em que há upgrades nos carros e personalização. '} genero={'Corrida'} plataforma='Desktop/Mobile' linkGitHub='https://github.com/DaviPereiraBarros/BattleOfTheAgo.git' idVideo={'hXxPXVrtVfk'} Messege={''}/>
       </>
    )
}