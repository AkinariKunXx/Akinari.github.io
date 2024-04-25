import Header from "../components/Header";
import "../css/Home.css";
import "../css/footer.css";
import Modal from './Modal'

function MainPage() {
    return (
        <>
            <Header />

            {/* hero section */}

            <section id="home" className="min-h-100vh flex justify-start items-center relative before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:bg-black/50">
                <img src="images/pc14.jpg" className="absolute w-full h-full object-cover -z-20 top-0" />
                <div className="mx-5 md-mx-l5">
                    <div className="inline-block br-round bg-indigo-30 indigo-lightest p-2 fs-s2 mb-5">
                        <div className="inline-block bg-indigo indigo-lightest br-round px-3 py-1 mr-3 fs-s3">
                            Join Meet Up
                        </div>
                    We are coming to Singapore. Learn more…
                    </div>
                    <div>
                        <h1 className="white fs-l3 lh-2 md-fs-xl1 md-lh-1 fw-900 ">
                            Ass <br />
                            Website Fast
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                                <img className="w-100pc" src="images/motherboard.png" />
                            </div>
                            <h4 className="white fw-600 fs-m3 mb-5">Материнские платы</h4>
                            <div className="indigo-lightest fw-600 fs-m1 opacity-50">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

            <section className="p-0 md-p-5">
                <div className="flex flex-wrap">
                    <div className="w-100pc md-w-33pc p-10">
                        <a href="#" className="block no-underline p-5 br-8 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300">
                            <img className="w-100pc" src="images\pc1.webp" alt="" />
                            <p className="fw-600 white fs-m3 mt-3">
                                Кринге
                            </p>
                            <div className="indigo fs-s3 italic after-arrow-right my-4">
                                Подробнее
                            </div>
                        </a>
                    </div>
                    <div className="w-100pc md-w-30pc p-10">
                        <a href="#" className="block no-underline p-5 br-8 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300">
                            <img className="w-100pc" src="images\pc2.jpeg" alt="" />
                            <p className="fw-600 white fs-m3 mt-3">
                                Кринге
                            </p>
                            <div className="indigo fs-s3 italic after-arrow-right my-4">
                                Подробнее
                            </div>
                        </a>
                    </div>
                    <div className="w-100pc md-w-30pc p-10">
                        <a href="#" className="block no-underline p-5 br-8 hover-bg-indigo-lightest-10 hover-scale-up-1 ease-300">
                            <img className="w-100pc" src="images/pc3.jpeg" alt="" />
                            <p className="fw-600 white fs-m3 mt-3">
                                Кринге
                            </p>
                            <div className="indigo fs-s3 italic after-arrow-right my-4">
                                Подробнее
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* slider */}

            <section className="relative bg-indigo-lightest-10">
                <div id="slider-1">
                    <div className="p-10 md-p-110 flex justify-center items-center flex-column text-center">
                        <img className="w-80pc" src="images/pc13.jpg" />
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

            {/* footer */}

            <footer className="bg-indigo-lightest-10">
                <div className="p-10">
                    <div className="">
                        <div className="tablet:flex tablet:gap-[40px] desktop:justify-between">
                            <div className="white opacity-60 fw-600 mb-[30px] desktop:w-100pc desktop:w-[60%] flex justify-between tablet:gap-[30px]">
                                <div className="tablet:ml-[30px]">
                                    <h2 className="white mb-[25px]">Контакты</h2>
                                    <div className="">
                                        <div className="">
                                            <div className="desktop:mb-[5px]">
                                                <a href="tel:+74957252525">+7(495)7252525</a>
                                            </div>
                                            <div className="desktop:mb-[5px]">
                                                ул. Тверская, 17, офис 738
                                            </div>
                                            <div className="desktop:mb-[5px]">
                                                mail@mail.ru
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="white opacity-60 fw-600 mb-[30px] desktop:w-100pc desktop:w-[60%] flex justify-between tablet:gap-[30px]">
                                <div className="tablet:ml-[30px]">
                                    <h2 className="white mb-[25px]">Навигация</h2>
                                    <div className="">
                                        <div className="">
                                            <div className="desktop:mb-[5px]">
                                                <button>Главнвая</button>
                                            </div>
                                            <div className="desktop:mb-[5px]">
                                                <button>О нас</button>
                                            </div>
                                            <div className="desktop:mb-[5px]">
                                                <button>Цены</button>
                                            </div>
                                            <div className="mobile:w-[150px]">
                                                <div className="button full bg-indigo white hover-opacity-100 hover-scale-up-1 ease-300 mobile:p-6">
                                                    <Modal/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-100pc desktop:mr-[60px]">
                                <div className="flex justify-center mb-[30px] desktop:mx-auto desktop:w-[60%]">
                                    <input type="text"
                                        className="py-[10px] input flex-grow-1 bw-0 fw-200 bg-indigo-lightest-10 white ph-indigo-lightest focus-white opacity-80 fs-s3 desktop:py-5 br-r-0"
                                        placeholder="Email" />
                                    <button className="py-[10px] button bg-indigo indigo-lightest fw-300 fs-s3 br-l-0">
                                        Отправить
                                    </button>
                                </div>
                                <div className="flex justify-around gap-[20px] desktop:my-8">
                                    <a href="#"
                                        className="desktop:relative p-3 bg-indigo br-round white hover-scale-up-1 ease-400">
                                        <i data-feather="vk" className="absolute-center h-4" />
                                        <svg className="bg-transparent" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1"
                                            x="0px" y="0px" viewBox="0 0 24 24" width="25" height="25">
                                            <g>
                                                <path
                                                    d="M22.316,1.684C20.632,0,17.921,0,12.5,0h-1C6.079,0,3.368,0,1.684,1.684C0,3.368,0,6.079,0,11.5v1   c0,5.421,0,8.131,1.684,9.816S6.079,24,11.5,24h1c5.421,0,8.131,0,9.816-1.684C24,20.632,24,17.921,24,12.5v-1   C24,6.079,24,3.368,22.316,1.684z M19.503,17h-1.75c-0.667,0-0.863-0.532-2.05-1.719c-1.039-1.001-1.484-1.131-1.743-1.131   c-0.353,0-0.458,0.1-0.458,0.6v1.569c0,0.43-0.137,0.681-1.25,0.681c-1.854,0-3.892-1.126-5.339-3.202   c-2.17-3.041-2.763-5.34-2.763-5.803c0-0.26,0.1-0.495,0.6-0.495h1.751c0.447,0,0.615,0.196,0.783,0.68   c0.856,2.493,2.3,4.672,2.893,4.672c0.222,0,0.324-0.103,0.324-0.667V9.608c-0.065-1.186-0.696-1.284-0.696-1.706   c0-0.195,0.167-0.402,0.445-0.402h2.751c0.371,0,0.5,0.198,0.5,0.643v3.467c0,0.37,0.161,0.5,0.272,0.5   c0.223,0,0.408-0.13,0.816-0.538c1.261-1.409,2.151-3.578,2.151-3.578c0.112-0.26,0.316-0.495,0.762-0.495h1.75   c0.529,0,0.641,0.272,0.529,0.643c-0.223,1.02-2.355,4.023-2.355,4.023c-0.186,0.297-0.26,0.445,0,0.779   c0.186,0.26,0.797,0.779,1.205,1.261c0.752,0.846,1.319,1.559,1.477,2.051C20.254,16.75,20.003,17,19.503,17z" />
                                            </g>
                                        </svg>
                                    </a>
                                    <a href="#" className="desktop:relative p-3 bg-indigo br-round white hover-scale-up-1 ease-400">
                                        <i data-feather="discord" className="absolute-center h-4" />
                                        <svg className="bg-transparent" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1"
                                            x="0px" y="0px" viewBox="0 0 24 24" width="25" height="25">
                                            <g>
                                                <path
                                                    d="M20.317,4.37c-1.53-0.702-3.17-1.219-4.885-1.515c-0.031-0.006-0.062,0.009-0.079,0.037   c-0.211,0.375-0.445,0.865-0.608,1.249c-1.845-0.276-3.68-0.276-5.487,0C9.095,3.748,8.852,3.267,8.641,2.892   C8.624,2.864,8.593,2.85,8.562,2.855C6.848,3.15,5.208,3.667,3.677,4.37C3.664,4.375,3.652,4.385,3.645,4.397   c-3.111,4.648-3.964,9.182-3.546,13.66c0.002,0.022,0.014,0.043,0.031,0.056c2.053,1.508,4.041,2.423,5.993,3.029   c0.031,0.01,0.064-0.002,0.084-0.028c0.462-0.63,0.873-1.295,1.226-1.994c0.021-0.041,0.001-0.09-0.042-0.106   c-0.653-0.248-1.274-0.55-1.872-0.892c-0.047-0.028-0.051-0.095-0.008-0.128c0.126-0.094,0.252-0.192,0.372-0.291   c0.022-0.018,0.052-0.022,0.078-0.01c3.928,1.793,8.18,1.793,12.061,0c0.026-0.012,0.056-0.009,0.079,0.01   c0.12,0.099,0.246,0.198,0.373,0.292c0.044,0.032,0.041,0.1-0.007,0.128c-0.598,0.349-1.219,0.645-1.873,0.891   c-0.043,0.016-0.061,0.066-0.041,0.107c0.36,0.698,0.772,1.363,1.225,1.993c0.019,0.027,0.053,0.038,0.084,0.029   c1.961-0.607,3.95-1.522,6.002-3.029c0.018-0.013,0.029-0.033,0.031-0.055c0.5-5.177-0.838-9.674-3.548-13.66   C20.342,4.385,20.33,4.375,20.317,4.37z M8.02,15.331c-1.183,0-2.157-1.086-2.157-2.419s0.955-2.419,2.157-2.419   c1.211,0,2.176,1.095,2.157,2.419C10.177,14.246,9.221,15.331,8.02,15.331z M15.995,15.331c-1.182,0-2.157-1.086-2.157-2.419   s0.955-2.419,2.157-2.419c1.211,0,2.176,1.095,2.157,2.419C18.152,14.246,17.206,15.331,15.995,15.331z" />
                                            </g>
                                        </svg>
                                    </a>
                                    <a href="#" className="desktop:relative p-3 bg-indigo br-round white hover-scale-up-1 ease-400">
                                        <i data-feather="telegram" className="absolute-center h-4" />
                                        <svg className="bg-transparent" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1"
                                            x="0px" y="0px" viewBox="0 0 24 24" width="25" height="25">
                                            <g>
                                                <path
                                                    d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z    M17.562,8.161c-0.18,1.897-0.962,6.502-1.359,8.627c-0.168,0.9-0.5,1.201-0.82,1.23c-0.697,0.064-1.226-0.461-1.901-0.903   c-1.056-0.692-1.653-1.123-2.678-1.799c-1.185-0.781-0.417-1.21,0.258-1.911c0.177-0.184,3.247-2.977,3.307-3.23   c0.007-0.032,0.015-0.15-0.056-0.212s-0.174-0.041-0.248-0.024c-0.106,0.024-1.793,1.139-5.062,3.345   c-0.479,0.329-0.913,0.489-1.302,0.481c-0.428-0.009-1.252-0.242-1.865-0.442c-0.751-0.244-1.349-0.374-1.297-0.788   c0.027-0.216,0.324-0.437,0.892-0.663c3.498-1.524,5.831-2.529,6.998-3.015c3.333-1.386,4.025-1.627,4.477-1.635   C17.472,7.214,17.608,7.681,17.562,8.161z" />
                                            </g>
                                        </svg>
                                        <div>
                                            <div></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="desktop:md-w-25pc desktop:mb-20">
                            <img src="images/logo.png" className="mb-[20px] w-11" alt="" />
                            <div className="white opacity-60 fs-s2 md-pr-10 desktop:mt-[25px]">
                                © 2010-2024 PULSTECH. Все права защищены.
                                <div>
                                    "PULSTECH" - является товарным знаком ООО
                                    "ПУЛЬСТЕХ", зарегистрированным в России и других
                                    странах.
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default MainPage;

<button type="button" className="button full bg-indigo white hover-opacity-100 hover-scale-up-1 ease-300 mobile:p-6">
                                                    Перезвоните мне
                                            </button>