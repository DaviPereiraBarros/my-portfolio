import 'tailwindcss/tailwind.css';
import '../../src/app/globals.css';
import React from "react";
import Header from '../../components/header/navbar'
import Games from '../../components/games/apresentationGames'


export default function battleoftheago()
{
    return(
    <>
     <Header/>
     <Games title={'Battle Of The Ago'} description={'Trata-se de um jogo 2D de ação e aventura. Nele, pude desenvolver um sistema de loja para os jogadores, level, armas etc. Só é possível efetuar a compra antes das fases. Objetivo futuro é trazer batalhas multiplayer.'} genero={'Ação e Aventura'} plataforma='Mobile' linkGitHub='https://github.com/DaviPereiraBarros/BattleOfTheAgo.git' idVideo={'1bsM1Nhjzy8'} Messege={''}/>
    </>
    )
}