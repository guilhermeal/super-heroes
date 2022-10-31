import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import LoadingSvg from "./../assets/loading.svg";

const baseUrlApi2 = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api`;

export function Heroes() {

	const [heroes, setHeroes] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
    const fetchHeroes = async () => {
      try {
        fetch(`${baseUrlApi2}/all.json`)
					.then((res) => res.json())
					.then((json) => {
						setHeroes(json)
					}).finally(()=>{
            setLoading(false);
          })
      } catch (error) {
        console.error(error);
      }
    };
    fetchHeroes();
  }, []);

  if(loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <img src={LoadingSvg} alt="Loading heroes..." />
      </div>
    )
  }

  if(heroes.length<=0) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: 'red',
      }}>
        <h1>NENHUM HERÓI ECONTRADO!</h1>
      </div>
    )
  }
	
	return (
		<div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))',
      gap: '2rem',
      padding: '1rem',
    }}>

    {heroes.map(hero => 
      <Hero 
        key={hero.id} 
        hero={hero} 
      />
    )}

		</div>	
	)
}