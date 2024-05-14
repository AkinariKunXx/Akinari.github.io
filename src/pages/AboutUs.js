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



            <section className="white p-10 ">
                <div className="startd-xl bg-indigo-lightest-10 p-10 rounded-xl">
                    <div className="mb-[2rem] font-defaultFont text-4xl">Почему мы?</div>
                    <div className="opacity-60 text-xl mb-[1rem]">Смеем заявить что у нас лучшее предложение компьютеров!</div>
                    <div className="opacity-60 text-lg mb-[1rem]">Наши компьютеры сочетают: высочайшее качество сборки, современное топовое железо ведущих производителей,
                        лучшие условия сервиса и гарантии, и при этом очень демократичные цены.</div>
                    <div className="opacity-60 text-lg mb-[2rem]">Отзывы покупателей лучшее подтверждение. Став нашим клиентом вы никогда об этом не пожалеете. Максимальная лояльность к клиентам. 
                        Если после покупки вы передумаете. Можете его вернуть без объяснения причин.</div>
                    <div className="mb-[2rem] font-defaultFont text-4xl">Обратная связь</div>
                    <div class="flex flex-col items-start gap-6">
                        <div class="relative w-[10rem] min-w-[100px]">
                            <textarea placeholder="Ваше имя"
                            class="peer h-full min-h-[10px] w-full resize-none border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"></textarea>
                            <label
                            class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            </label>
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-6">
                        <div class="relative w-[10rem] min-w-[100px]">
                            <textarea placeholder="Телефон"
                            class="peer h-full min-h-[50px] w-full resize-none border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"></textarea>
                            <label
                            class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            </label>
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-6">
                        <div class="relative w-[10rem] min-w-[100px]">
                            <textarea placeholder="E-mail"
                            class="peer h-full min-h-[50px] w-full resize-none border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"></textarea>
                            <label
                            class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            </label>
                        </div>
                    </div>
                    <div class="flex flex-col items-start gap-6">
                        <div class="relative w-[13rem] min-w-[100px]">
                            <textarea placeholder="Сообщение"
                            class="peer h-full min-h-[50px] w-full resize-none border-b bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"></textarea>
                            <label
                            class="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-white after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            </label>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs;