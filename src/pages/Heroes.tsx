import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import LoadingSvg from "./../assets/loading.svg";
import { Modal } from "./components/Modal";

const baseUrlApi2 = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api`;

export function Heroes() {

	const [heroes, setHeroes] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [hero, setHero] = useState<any[]>([]);
	const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

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

  function getAligmentColor(alignment: string) {
    switch(alignment) {
        default: {
            return {cor1:'white', cor2:'#919191'}; 
        }
        case 'good': {
            return {cor1:'green', cor2:'#ccffcc'};
        }
        case 'neutral': {
            return {cor1:'blue', cor2:'#cce6ff'};
        }
        case 'bad': {
            return {cor1:'red', cor2:'#ffb3b3'};
        }
    }
  }

  const getGenderColor = (gender: string) => {
    switch(gender) {
        default: {
            return {genero: '', cor3:'black', cor4:'#919191'}; 
        }
        case 'Female': {
            return {genero: 'FEMININO', cor3:'#CC0DCF', cor4:'#ccffcc'};
        }
        case 'Male': {
            return {genero: 'MASCULINO', cor3:'#334BFF', cor4:'#cce6ff'};
        }
    }
  }

  const handleClick = (id:number) => {
    const filteredHero = heroes.filter(h => h.id == id).shift();
    setHero(filteredHero);
    toggleModal();
  }

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
        height: '100%',
        color: 'red',
      }}>
        <h1>NENHUM HERÓI ECONTRADO!</h1>
      </div>
    )
  }
	
	return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: '95%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))',
          gap: '2rem',
          padding: '1rem',
          opacity: `${showModal ? '5%' : '100%'}`,
          zIndex: '10',
          transition: 'opacity 0.6s ease-out',

        }}
        onClick={() => toggleModal()}
        >

          {heroes && heroes.map(hero => 
            <Hero 
              key={hero.id} 
              hero={hero} 
              onClick={(id) => handleClick(id)}
              genderColor={getGenderColor(hero.appearance.gender)}
              aligmentColor={getAligmentColor(hero.biography.alignment)}
            />
          )}
        </div>	

      </div>
      {showModal && (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Modal 
            isOpen={showModal}
            onClose={()=>toggleModal()}
            hero={hero}
            genderColor={getGenderColor(hero.appearance.gender)}
            aligmentColor={getAligmentColor(hero.biography.alignment)}
          />
        </div>
      )}
    </>
	)
}