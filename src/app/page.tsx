import 'tailwindcss/tailwind.css';
import './globals.css';
import Header from '../../components/header/navbar'
import Section2 from '../../components/sections/section2';
import Section1 from '../../components/sections/section1';
import Card from '../../components/projects/cards';

export default function Home() {

  return (
     <>
      <Header/>
     
     <main className="bg-slate-950 bg h-full flex items-center justify-center">
     <div className='flex-row'>   
     <Section1/>
     <Section2/>
     <Card title={'Game'} description={'Games'} image={''}/>
     </div>
     </main>
     
  </>
  );
}
