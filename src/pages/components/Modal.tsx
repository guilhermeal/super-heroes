interface ModalProps {
    hero: any,
    isOpen: boolean;
    onClose: () => void;
}

export function Modal ({isOpen, hero, onClose}: ModalProps) {
    return (
        <div style={{
            width: '50vw',
            height: '50vh',
            backgroundColor: '#FFF',
            display: `${isOpen ? 'visible' : 'none'}`,
            position: 'fixed',
            overflow: 'auto',
            zIndex: '100',
            margin: 'auto',
            marginTop: '25vh',
            marginLeft: '25vw',
            borderRadius: '1rem',
            padding: '1rem',
            boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                width: '100%',
                borderBottom: '1px solid #CCC',
            }}>
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

            </div>
        </div>
    )
}