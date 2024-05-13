import React from 'react';

function InfiniteCarousel() {
    return (
            <div class="bg- w-full inline-flex flex-nowrap overflow-hidden">
                <ul class="flex items-center justify-center gap-4 md:gap-8 md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li>
                            <img src="images/ir.png" width={100} className="rounded-lg" idh alt="Facebook" />
                        </li>
                        <li>
                            <img src="images/github.svg" width={200} alt="Github" />
                        </li>
                        <li>
                            <img src="images/hyperx.svg" width={200} alt="HyperX" />
                        </li>
                        <li>
                            <img src="images/intel.svg" width={200} alt="Intel" />
                        </li>
                        <li>
                            <img src="images/msi.svg" width={200} alt="Spark" />
                        </li>
                        <li>
                            <img src="images/nvidia.svg" width={200} alt="Samsung" />
                        </li>
                        <li>
                            <img src="images/nzxt.svg" width={200} alt="Quora" />
                        </li>
                        <li>
                            <img src="images/samsung.svg" width={200} alt="Sass" />
                        </li>
                    </ul>
                    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                        <li>
                            <img src="images/ir.png" width={100} className="rounded-lg" idh alt="Facebook" />
                        </li>
                        <li>
                            <img src="images/github.svg" width={200} alt="Disney" />
                        </li>
                        <li>
                            <img src="images/hyperx.svg" width={200} alt="Airbnb" />
                        </li>
                        <li>
                            <img src="images/intel.svg" width={200} alt="Apple" />
                        </li>
                        <li>
                            <img src="images/msi.svg" width={200} alt="Spark" />
                        </li>
                        <li>
                            <img src="images/nvidia.svg" width={200} alt="Samsung" />
                        </li>
                        <li>
                            <img src="images/nzxt.svg" width={200} alt="Quora" />
                        </li>
                        <li>
                            <img src="images/samsung.svg" width={200} alt="Sass" />
                        </li>
                    </ul>
        </div>
    );
}

export default InfiniteCarousel;