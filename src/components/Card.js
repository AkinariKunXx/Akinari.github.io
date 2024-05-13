import check from "../media/check.svg";

export function CardCatalog({ card }) {
    const advJsx = card.advantages.map(text => (<p className="flex">
        <img src={check} style={{
            height: "30px"
        }} />
        {text}
    </p>))
    return (
        <div className="w-100pc p-3">
            <a href="#" className="block no-underline p-4 br-8 hover-scale-up-1 ease-400 flex justify-center items-centr flex-col">
                <img className="h-[55rem] rounded-lg object-cover" src={card.src} alt="" />
            </a>
        </div>
    );
};