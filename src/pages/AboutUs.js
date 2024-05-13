function AboutUs() {
    return (
        <>
            {/* hero section */}

            <section className="min-h-50vh flex justify-start items-center relative before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:bg-black/50">
                <img src="images/pc13.jpg" className="absolute w-full h-full object-cover -z-20 top-0" />
                <div className="mx-5 md-mx-l5">
                    <div className="font-defaultFont text-4xl inline-block br-round bg-indigo-30 white p-3">
                        О нас
                    </div>
                    <div>
                        <div className="br-8 mt-10 inline-flex"></div>
                    </div>
                </div>
            </section>



            <section>
                <div className="mx-5 md-mx-l5 white">
                    О компании
                </div>
            </section>
        </>
    )
}
export default AboutUs;