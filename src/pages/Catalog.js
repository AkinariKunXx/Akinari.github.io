import { CardCatalog as Card } from "../components/Card";

const cards=[
    {
        src: "images/pc5.webp",
        advantages: [
            'asdasd',
            'asdasdasds',
            'asdasdsd',
            'asdasdsd',
            'asdasdsd',
        ]
    },
    {
        src: "images/pc5.webp",
        advantages: [
            'asdasd',
            'asdasdasds',
            'asdasdsd',
            'asdasdsd',
            'asdasdsd',
        ]
    },
    {
        src: "images/pc5.webp",
        advantages: [
            'asdasd',
            'asdasdasds',
            'asdasdsd',
            'asdasdsd',
            'asdasdsd',
        ]
    },
    {
        src: "images/pc5.webp",
        advantages: [
            '',
            'asdasdasds',
            'asdasdsd',
            'asdasdsd',
            'asdasdsd',
        ]
    },
    {
        src: "images/pc5.webp",
        advantages: [
            'asdasd',
            'asdasdasds',
            'asdasdsd',
            'asdasdsd',
            'asdasdsd',
        ]
    },
    {
        src: "images/pc5.webp",
        advantages: [
            'asdasdas',
            'asdasdasds',
            'asdasdsd',
            'asdasdsd',
            'asdasdsd',
        ]
    },
];

function Catalog() {
    let cardsjsx = cards.map((card, key) => <Card card={card} key={key} />);
    
    return(
        <>
            <section className="p-0 md-p-5">
                <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1">
                    {cardsjsx}
                </div>
            </section>
        </>
    )
}
export default Catalog;