import './styles/hero.css';

interface HeroProps {
    hero: any;
	onClick?: (id:number) => void;
    genderColor: {
        genero?: string;
        cor3?: string;
        cor4?: string;
    },
    aligmentColor: {
        cor1?: string;
        cor2?: string;
    }
}

export function Hero({hero, onClick, aligmentColor, genderColor}: HeroProps) {

    const {cor1, cor2} = aligmentColor;
    const {genero, cor3, cor4} = genderColor;

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
		
		{genero && genero.length>0 && (
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