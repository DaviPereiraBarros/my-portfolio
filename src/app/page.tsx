import Header from '../../components/header/navbar'
import TitleSection from '../../components/sections/titleSection';
import Section1 from '../../components/sections/section1';
import Card from '../../components/projects/cards';
import Game1 from '../../public/assets/Game1.png'
import Game2 from '../../public/assets/Game2.gif'
import Game3 from '../../public/assets/Game3.png'
import Game4 from '../../public/assets/Game4.png'
import Game5 from '../../public/assets/Game5.png'
import Game6 from '../../public/assets/Game6.png'
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer';

export default function Home() {

  return (
     <>
      <Header/>
     
     <main className="bg-slate-950 bg h-full flex items-center justify-center">
     <div className='flex-row'>

     <div id='#section1'>
     <Section1/>
     </div>
     
     <div id='sectionProjects'>
     <TitleSection title={'PROJECTS'} description={''}/>
     </div>

     <section className='grid grid-cols-3 gap-4'>
     <Card title={'Battle Of The Ago'} description={'Luta e ação 2D. Objetivo é concluir às fases de acordo com a história.'} image={Game1} link={'/battleoftheago'}/>    
     <Card title={'Adventure Fox'} description={'Uma aventura pelo mundo, descubra novas fases e principalmente plataformas. '} image={Game2} link={'/adventurefox'}/>
     <Card title={'World War C'} description={'O jogo retrata o cenário da pandemia com intuito educacional sobre a vacinação.'} image={Game3} link={'/worldwarc'}/>
     <Card title={'Lost World'} description={'Clássico RPG 2D para derrotar inimigos, adicionar novas armas e desvendar lugares.'} image={Game4} link={'/lostworld'}/>
     <Card title={'Speed In Heights'} description={'Desafie a velocidade...Sinta a adrenalina pelas pistas'} image={Game5} link={'/speedinheight'}/>
     <Card title={'Middle Of War'} description={'A sobreviência é o mais importante nesse mundo dominado por mortos...'} image={Game6} link={'/middleofwar'}/>
     </section>

     <div id='contact' className='mt-6'>
     <TitleSection title={'CONTACT'} description={'Sinta-se à vontade para me enviar uma mensagem aqui, tentarei responder o mais rápido possível!'}/>
     </div>

     <section>
      <Contact/>
     </section>

     <footer>
      <Footer/>
     </footer>

     </div>
     </main>
    
  </>
  );
}
