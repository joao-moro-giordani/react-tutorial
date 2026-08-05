import cow from './assets/cow.webp'

function Paragrafo() {
    return (
        <>
            <p>Parágrafo explicativo</p>
            <p><img src={cow} alt="Cow" width={250} height={250} /></p>
        </>
    )
}

export default Paragrafo