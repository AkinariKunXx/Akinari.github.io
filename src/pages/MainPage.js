import "../css/Home.css";
import "../css/footer.css";
import PricingCard from "../components/CardPrice.js";

const pricingCards = [
    {
        title: "standart",
        src: "images/pccatalog.jpg",
        adv: [
            '123',
            '123',
        ],
    },
    {
        title: "standart",
        src: "images/pccatalog.jpg",
        adv: [
            '123',
            '123',
        ],
    },
];

function MainPage() {
    return (
        <>
            {/* hero section */}

            <section id="home" className="min-h-100vh flex justify-start items-center relative before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:bg-black/70">
                <img src="images/pc14.jpg" className="absolute w-full h-full object-cover -z-20 top-0" />
                <div className="mx-5 md-mx-l5">
                    <div className="font-defaultFont text-4xl inline-block br-round bg-indigo-30 white p-3">
                        Игровые компьютеры
                    </div>
                    <div>
                        <h1 className="white lh-3 text-lg fw-500 p-3">
                            Мощные игровые компьютеры на процессорах от Intel и AMD последнего поколения <br/>
                            с видеокартами серии GTX и RTX, превосходная производительность для любых игр.
                        </h1>
                        <div className="br-8 mt-10 inline-flex"></div>
                    </div>
                </div>
            </section>

            {/* features */}

            <section id="features" className="p-10 md-p-l5">
                <div className="flex flex-column md-flex-row mx-auto">
                    <div className="w-100pc md-w-40pc">
                        <div className="br-8 p-5 m-5">
                            <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5">
                                <img className="w-100pc" src="images/chip.png" />
                            </div>
                            <h4 className="white fw-600 fs-m3 mb-5">Процессоры</h4>
                            <div className="indigo-lightest fw-600 fs-m1 lh-3 opacity-50">
                                Мы устанавливаем проверенные процессоры,
                                которые обеспечивают высокую производительность и надежность.
                            </div>
                            <a href="#"
                                className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">
                                Подробнее
                            </a>
                        </div>
                    </div>
                    <div className="w-100pc md-w-40pc">
                        <div className="br-8 p-5 m-5">
                            <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5">
                                <img className="w-100pc" src="images/gpu.png" />
                            </div>
                            <h4 className="white fw-600 fs-m3 mb-5">Видеокарты</h4>
                            <div className="indigo-lightest fw-600 fs-m1 opacity-50">
                                Мы выбираем только качественные видеокары,
                                мы гарантируем клиентам стабильную работу и качественный графический опыт.
                            </div>
                            <a href="#"
                                className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">
                                Подробне
                            </a>
                        </div>
                    </div>
                    <div className="w-100pc md-w-40pc">
                        <div className="br-8 p-5 m-5">
                            <div className="flex justify-center items-center bg-indigo-lightest-10 white w-l5 h-l5 br-round mb-5">
                                <img className="w-100pc" src="images/motherboard.png" />
                            </div>
                            <h4 className="white fw-600 fs-m3 mb-5">Материнские платы</h4>
                            <div className="indigo-lightest fw-600 fs-m1 opacity-50">
                                Мы также используем проверенные оперативные модули
                                для обеспечения быстрой и стабильной работы системы.
                            </div>
                            <a href="#"
                                className="mt-5 button bg-indigo-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300">
                                Подробнее
                            </a>
                        </div>
                    </div>
                    \\
                </div>
            </section>

            {/* pictures pc */}
            
            <section className="p-10 md-p-l5">
                {pricingCards.map((elem, i) => <PricingCard card={elem} key={i} />)}
            </section>

            {/* slider */}

            <section className="relative bg-indigo-lightest-10">
                <div id="slider-1">
                    <div className="p-10 md-p-110 flex justify-center items-center flex-column text-center">
                        <img className="w-50pc" src="images/pc13.jpg" />
                        <h2 className="white fs-l3 fw-900">
                            Lorem ipsum dolor sit amet, consectetur
                        </h2>
                        <p className="indigo-lightest fw-600 fs-m1 opacity-30 my-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor{" "}
                        </p>
                        <a href="#" className="button-md bg-indigo white fs-s3 br-4 black fw-600 no-underline m-5">
                            BUY NOW
                        </a>
                    </div>
                </div>
                <ul className="absolute list-none w-100pc flex justify-between top-50pc"></ul>
            </section>

            {/* big text */}

            <section className="p-10 md-py-10">
                <div className="w-100pc md-w-70pc mx-auto py-10">
                    <h2 className="white fs-l2 md-fs-xl1 fw-900 lh-2">
                        Торопитесь, скидка{" "}
                        <span className="border-b bc-indigo bw-4"> 15%</span> до конца месяца!{" "}
                    </h2>
                </div>
            </section>

            {/* pricing */}

            <section id="pricing">
                <div className="p-10 flex flex-wrap">
                    <div className="w-100pc md-w-50pc">
                        <div className="p-5">
                        </div>
                    </div>
                    <div className="w-100pc md-w-25pc">
                        <div className="m-3 p-5 br-8 bg-indigo-lightest-10 overflow-hidden">
                            <div className="p-3">
                            </div>
                            <div className="p-3 indigo-lightest fw-400 fs-s1 lh-5">
                            </div>
                            <div className="p-3">
                                <button className="button full bg-black white  hover-opacity-100 hover-scale-up-1 ease-300">
                                    aaa
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-100pc md-w-25pc">
                        <div className="m-3 p-5 br-8 bg-white overflow-hidden">
                            <div className="p-3">
                            </div>
                            <div className="p-3 black fw-400 fs-s1 lh-5">
                            </div>
                            <div className="p-3">
                                <button className="button full bg-indigo white hover-opacity-100 hover-scale-up-1 ease-300">
                                    aaa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* testimonials */}

            <section className="p-10 md-p-l5">
                <div id="slider-2">
                    <div className="px-3">
                        <div className="p-8 br-8 bg-indigo-lightest-10 relative">
                            <span className="fs-l5 lh-1 white opacity-10 absolute top-0 z--1">
                                ❝
                            </span>
                            <p className="fw-600 fs-m1 indigo-lightest opacity-80 italic ls-wider">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor{" "}
                            </p>
                            <div className="flex items-center my-5">
                                <div className="block br-round border bc-black bw-4 w-l3 h-l3">
                                    <img className="br-round" src="https://randomuser.me/api/portraits/men/46.jpg" alt="" />
                                </div>
                                <div className="ml-4 fs-s1">
                                    <div className="indigo-lightest">Mahnaz Farzin</div>
                                    <div className="indigo-lightest opacity-20">
                                        Product Manager, XYZ
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* featured blog */}
            
            <section className="p-10 md-p-l10">
                <div className="md-w-75pc">
                    <h2 className="white fs-l3 fw-900 lh-1">
                        Lorem ipsum dolor sit amet, consectetur
                    </h2>
                    <p className="indigo-lightest fw-600 fs-m1 opacity-50 my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor{" "}
                    </p>
                </div>
                <div className="relative w-100pc h-50vh bg-cover bg-b" style={{ backgroundImage: "url(images/pc12.jpg)" }}>
                </div>
            </section>

            {/* subscribe */}

            <section className="p-10 md-p-l5">
                <div className="br-8 bg-indigo-lightest-10 p-5 md-p-l5 flex flex-wrap md-justify-between md-items-center">
                    <div className="w-100pc md-w-33pc">
                        <h2 className="white fs-m4 fw-800">Обнови ПК сегодня</h2>
                        <p className="fw-600 indigo-lightest opacity-40">
                            Испытай новый опыт в играх.
                        </p>
                    </div>
                    <div className="flex w-[100%] tablet:w-[60%]">
                        <div className=" w-[170%] flex my-5 tablet:w-[140%] decktop:">
                            <input type="text"
                                className="text-[8px] p-[50px] pl-[10px] w-[20px] flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 py-5 br-r-0"
                                placeholder="Email" />
                            <button className="w-[10px] button-lg bg-indigo indigo-lightest fw-300 fs-s3 br-l-0 tablet:">
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage;

<button type="button" className="button full bg-indigo white hover-opacity-100 hover-scale-up-1 ease-300 mobile:p-6">
                                                    Перезвоните мне
                                            </button>