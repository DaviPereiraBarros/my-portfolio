import React from "react";
import 'tailwindcss/tailwind.css';
import '../../src/app/globals.css';
import Header from '../../components/header/navbar'
import Games from "../../components/games/apresentationGames";

export default function LostWorld()
{
    return(
        <>
        <Header/>
        <Games title={'Lost World'} description={'Percorrer a emocionante e fantasiosa história de Hannah e seus amigos, desvendando mundos e aprimorando habilidades. A narrativa tem como objetivo destravar emoções e trazer interatividade com os jogadores.'} genero={'RPG Top Down'} plataforma='Desktop' linkGitHub='https://github.com/DaviPereiraBarros/Lost-World.git' idVideo={'QP80c3QpoQE'} Messege={""}/>
       </>
    )
}