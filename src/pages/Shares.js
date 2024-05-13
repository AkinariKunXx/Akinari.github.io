function Shares() {
    return (
        <>
            {/*  hero section */}

            <section className="min-h-50vh flex justify-start items-center relative before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:bg-black/50">
                <img src="images/pc15.jpg" className="absolute w-full h-full object-cover -z-20 top-0" />
                <div className="mx-5 md-mx-l5">
                    <div className="font-defaultFont text-4xl inline-block br-round bg-indigo-30 white p-3">
                        Акции
                    </div>
                    <div>
                        <div className="br-8 mt-10 inline-flex"></div>
                    </div>
                </div>
            </section>

            {/*   */}

            <section className="p-1 md-p-5 height-[30px] grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 "> 
                <div className="flex w-100pc p-3">
                    <a className="block no-underline p-4 br-8 ease-400 flex justify-center items-centr flex-col">
                        <img className="h-[55rem] rounded-lg object-cover" src="images/pc13.jpg" alt="" />
                    </a>
                </div>
                <div className="flex w-100pc p-3">
                    <a className="block no-underline p-4 br-8 ease-400 flex justify-center items-centr flex-col">
                        <img className="h-[55rem] rounded-lg object-cover" src="images/Screenshot_1.png" alt="" />
                    </a>
                </div>
                <div className="flex w-100pc p-3">
                    <a className="block no-underline p-4 br-8 ease-400 flex justify-center items-centr flex-col">
                        <img className="h-[55rem] rounded-lg object-cover" src="images/pc13.jpg" alt="" />
                    </a>
                </div>
            </section>
        </>
    )
}
export default Shares;