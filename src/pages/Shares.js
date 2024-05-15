function Shares() {
    return (
        <>
            {/*  hero section */}

            <section className="min-h-50vh flex justify-start items-center relative before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:bg-black/50">
                <img src="images/pc17.jpg" className="object-top object-cover absolute w-full h-full -z-20 top-0" />
                <div className="mx-5 md-mx-l5">
                    <div className="font-defaultFont text-4xl inline-block br-round bg-indigo-30 white p-3">
                        Акции
                    </div>
                    <div>
                        <div className="br-8 mt-10 inline-flex"></div>
                    </div>
                </div>
            </section>

            {/* card  */}

            <section className="gap-5 p-1 md-p-5 grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 "> 
                <div className="roundenpm startd-xl bg-[url('/public/images/pc16.jpg')] flex before:content-[''] relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black/50">
                    <div className="z-[10] h-[50rem] grid content-end p-5">
                        <div className="white mb-[1rem] font-defaultFont text-2xl">1 Марта 2024</div>
                        <div className="white font-defaultFont font-[900] text-3xl">Скидка 5% при покупке ПК за наличный расчет!</div>
                    </div>
                </div>
                <div className="bg-center bg-contain bg-no-repeat rounded-xl bg-[url('/public/images/qr.png')] flex before:content-[''] relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black/25">
                    <div className="z-[10] h-[50rem] grid content-end p-5">
                        <div className="white mb-[1rem] font-defaultFont text-2xl">18 Декабря 2023</div>
                        <div className="white font-defaultFont font-[900] text-3xl">Оставьте отзыв и получите 500 рублей!</div>
                    </div>
                </div>
                <div className="rounded-xl bg-[url('/public/images/u.webp')] flex before:content-[''] relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black/50">
                    <div className="z-[10] h-[50rem] grid content-end p-5">
                        <div className="white mb-[1rem] font-defaultFont text-2xl">5 Июня 2023</div>
                        <div className="white font-defaultFont font-[900] text-3xl">Клавиатура + мышь в подарок при покупке ПК</div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Shares;