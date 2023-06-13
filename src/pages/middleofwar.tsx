import React from "react";
import 'tailwindcss/tailwind.css';
import '../../src/app/globals.css';
import Header from '../../components/header/navbar'
import Games from "../../components/games/apresentationGames";

export default function MiddleOfWar()
{
    return(
        <>
        <Header/>
        <Games title={'Middle Of War'} description={'Viajar mundos, travar guerras com outras galáxias e principalmente liderar seu esquadrão. Torna-se um general nessa aventura e destrua planetas! Modo história e Multiplayer em breve.'} genero={'FPS'} plataforma='Desktop' linkGitHub='' idVideo={''} Messege={"Em Desenvolvimento"}/>
       </>
    )
}