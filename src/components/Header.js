import { Link } from "react-router-dom";

const links = [
    {
        text: "Главная",
        href: "/"
    },
    {
        text: "Функции",
        href: "#features"
    },
    {
        text: "Каталог",
        href: "/catalog"
    },
    {
        text: "О нас",
        href: "#blog"
    },
];

// console.log(links[0].text)
function Header() {
    const linksJsx = links.map((elem) => {
        return <HeaderLink text={elem.text} href={elem.href} />
    })

    return (
        <nav className="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black/75 fixed z-10 h-[80px]">
            <div className="flex justify-between">
            <a href="#" className="flex items-center p-2 mr-4 no-underline">
                <img className="max-h-l3 w-auto" src="images/logo.png" />
            </a>
            <a
                data-toggle="toggle-nav"
                data-target="#nav-items"
                href="#"
                className="flex items-center ml-auto md-hidden indigo-lighter opacity-50 hover-opacity-100 ease-300 p-1 m-3"
            >
                <i data-feather="menu" />
            </a>
            </div>
            <div
            id="nav-items"
            className="hidden flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center"
            >
                {linksJsx}

                <a href="#" className="button bg-white black fw-600 no-underline mx-5">
                    Регистрация
                </a>
            </div>
        </nav>
    );
}

function HeaderLink({ href, text }) {
    return (
        <Link
            to={href}
            className="fs-s1 mx-3 py-3 text-violet-500 no-underline hover-underline"
        >
            {text}
        </Link>
    );
}


export default Header;