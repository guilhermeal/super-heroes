import { Hero } from './Hero';
import './styles/modal.css';

interface ModalProps {
    hero: any;
    isOpen: boolean;
    onClose: () => void;
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

export function Modal ({isOpen, hero, onClose, aligmentColor, genderColor}: ModalProps) {

    const {cor1, cor2} = aligmentColor;
    const {genero, cor3, cor4} = genderColor;

    return (
        <div
         className='modal'
         style={{
            display: `${isOpen ? 'flex' : 'none'}`,
         }}
        >
            <div 
             className='modal-header'
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h2>{hero.name}</h2>
                    <span style={{
                        marginTop: '-1rem',
                        paddingBottom: '1rem',
                    }}>{hero.biography.fullName}</span>
                </div>
                <button 
                    onClick={()=>onClose()}
                    style={{
                        backgroundColor: '#FFF',
                        border: '1px solid #999',
                        width: '2rem',
                        height: '2rem',
                        borderRadius: '50%',
                        padding: '0',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
                    title='Fechar janela'
                >X</button>
            </div>

            <div 
             className='modal-body'
            >
                <Hero 
                    key={hero.id} 
                    hero={hero} 
                    genderColor={genderColor}
                    aligmentColor={aligmentColor}
                />
            </div>
        </div>
    )
}