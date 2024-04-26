import check from "../media/check.svg";

export default function Card({ card }) {
    return (
        <div className="w-100pc p-10">
            <a href="#" className="block no-underline p-5 br-8 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300 flex justify-center items-centr flex-col">
                <img className="h-96 object-cover" src={card.src} alt="" />
                <p className="fw-600 white fs-m3 mt-3">
                    {card.title}
                </p>
                <div className="indigo fs-s3 italic after-arrow-right my-4">
                    Подробнее
                </div>
            </a>
        </div>
    );
};

export function CardCatalog({ card }) {
    const advJsx = card.advantages.map(text => (<p>
        <img src={check} style={{
            height: "30px"
        }} />
        {text}
    </p>))
    return (
        <div className="w-100pc p-10">
            <a href="#" className="block no-underline p-5 br-8 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300 flex justify-center items-centr flex-col">
                <img className="h-96 object-cover" src={card.src} alt="" />
                <p className="fw-600 white fs-m3 mt-3">
                    {advJsx}
                </p>
                <div className="indigo fs-s3 italic after-arrow-right my-4">
                    Подробнее
                </div>
            </a>
        </div>
    );
};