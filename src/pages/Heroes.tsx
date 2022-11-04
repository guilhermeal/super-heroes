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
          opacity: `${showModal ? '20%' : '100%'}`,
          zIndex: '10',
        }}>

          {heroes && heroes.map(hero => 
            <Hero 
              key={hero.id} 
              hero={hero} 
              onClick={(id) => handleClick(id)}
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
          />
        </div>
      )}
    </>
	)
}