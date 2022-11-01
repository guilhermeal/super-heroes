import './style.css';

interface HeroProps {
    hero: any,
	onClick: (id:number) => void,
}

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

function getGenderColor(gender: string) {
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

export function Hero({hero, onClick}: HeroProps) {

    const {cor1, cor2} = getAligmentColor(hero.biography.alignment);
    const {genero, cor3, cor4} = getGenderColor(hero.appearance.gender);

    return <div className="hero" style={{
        background: `linear-gradient(10deg, ${cor2}, ${cor1})`,
    }}
		onClick={()=>onClick(hero.id)}
	>
        <div className="cardHeroCover" style={{
            backgroundImage: `url("${hero.images.md}")`,
        }}>
			<div>
				<div className='cardHeroCoverDetails'>
					<span>{hero.appearance.height[1] || hero.appearance.height}</span>
				</div>

				<div className='cardHeroCoverDetails'>
					<span>{hero.appearance.weight[1] || hero.appearance.weight}</span>
				</div>
			</div>
        </div>
		
		{genero.length>0 && (
			<div className='cardHeroCoverGender' style={{
				backgroundColor: `${cor3}`,
			}}>
				{genero}
			</div>
		)}
        <div className='cardHero'>
            <div className='cardHeroTitle'>
                <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                }}
				>
                    <p>
                        {hero.name}
                    </p>
                    <div style={{
                        width: '1rem',
                        height: '1rem',
                        backgroundColor: `${cor1}`,
                        borderRadius: '50%',
                    }} 
                        title={hero.biography.alignment}
                    />
                </span>
                <span>
                    {hero.biography.fullName || '.'}
                </span>
            </div>            
            <div className='cardHeroDetails'>
                <ul>
                    <li>
                        <legend>INTELIGÊNCIA:</legend>
                        <span>{hero.powerstats.intelligence}</span>
                    </li>
                
                    <li>
                        <legend>FORÇA:</legend>
                        <span>{hero.powerstats.strength}</span>
                    </li>

                    <li>
                        <legend>VELOCIDADE:</legend>
                        <span>{hero.powerstats.speed}</span>
                    </li>

                    <li>
                        <legend>DURABILIDADE:</legend>
                        <span>{hero.powerstats.durability}</span>
                    </li>

                    <li>
                        <legend>PODER:</legend>
                        <span>{hero.powerstats.power}</span>
                    </li>

                    <li>
                        <legend>AGRESSIVIDADE:</legend>
                        <span>{hero.powerstats.combat}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}



/*

OBJECT HERO
{
  "id": 142,
  "name": "Bumblebee",
  "slug": "142-bumblebee",
  "powerstats": {
    "intelligence": 63,
    "strength": 28,
    "speed": 25,
    "durability": 10,
    "power": 47,
    "combat": 35
  },
  "appearance": {
    "gender": "Female",
    "race": "Human",
    "height": [
      "5'7",
      "170 cm"
    ],
    "weight": [
      "130 lb",
      "59 kg"
    ],
    "eyeColor": "Brown",
    "hairColor": "Black"
  },
  "biography": {
    "fullName": "Karen Beecher",
    "alterEgos": "No alter egos found.",
    "aliases": [
      "-"
    ],
    "placeOfBirth": "-",
    "firstAppearance": "Teen Titans #45",
    "publisher": "DC Comics",
    "alignment": "good"
  },
  "work": {
    "occupation": "-",
    "base": "San Francisco, California"
  },
  "connections": {
    "groupAffiliation": "Doom Patrol, S.T.A.R. Labs, Formerly Teen Titans",
    "relatives": "Mal Duncan (husband)"
  },
  "images": {
    "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/142-bumblebee.jpg",
    "sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/142-bumblebee.jpg",
    "md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/142-bumblebee.jpg",
    "lg": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/142-bumblebee.jpg"
  }
}
*/