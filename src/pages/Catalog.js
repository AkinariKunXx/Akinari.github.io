import { CardCatalog as Card } from "../components/Card";

const cards=[
    {
        src: "images/pc5.webp",
        advantages: [
            'GeForce RTX 3090',
            'Intel Core i9 11900k',
            '32GB DDR4',
            '480GB SSD + 2TB SSD',
            'Windows 11',
        ]
    },
    {
        src: "images/pc8.jpg",
        advantages: [
            'GeForce RTX 4090',
            'Intel Core i9 13900k',
            '64GB DDR5',
            '1TB SSD + 4TB SSD',
            'Windows 11',
        ]
    },
    {
        src: "images/pc7.webp",
        advantages: [
            'GeForce RTX 4080',
            'Intel Core ',
            '32GB DDE4',
            '240GB SSD + 1TB HDD',
            'Windows 11',
        ]
    },
    {
        src: "images/pc10.jpg",
        advantages: [
            'GeForce RTX 3070',
            'Intel Core i7 10700',
            '16GB DDR4',
            '120GB SSD + 2TB HDD',
            'Windows 11',
        ]
    },
    {
        src: "images/pc9.jpg",
        advantages: [
            'GeForce RTX ',
            'Intel Core ',
            'a',
            'a',
            'Windows 11',
        ]
    },
    {
        src: "images/pc11.jpg",
        advantages: [
            'GeForce RTX ',
            'Intel Core ',
            'a',
            'a',
            'Windows 11',
        ]
    },
];

function Catalog() {
    let cardsjsx = cards.map((card, key) => <Card card={card} key={key} />);
    
    return(
        <>
            <section id="catalog" className="min-h-100vh flex justify-start items-center relative before:content-[''] before:w-full before:h-full before:absolute  before:left-0 before:-z-10 before:bg-black/60">
                <img src="images/pc_battlestations-4.jpg" className="absolute w-full h-full object-cover -z-20 top-0" />
                <div className="mx-5 md-mx-l5">
                    <div>
                        <p className="text-4xl inline-block br-round bg-indigo-30 white p-3 fw-800">
                            Наши сборки
                        </p>
                    </div>
                </div>
            </section>
            <section className="p-1 md-p-5">
                <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1">
                    {cardsjsx}
                </div>
            </section>
        </>
    )
}
export default Catalog;