import { Link } from "react-router-dom";
import Form from "../components/Form.js";

const links = [
    {
        text: "Главная",
        href: "/"
    },
    {
        text: "Акции",
        href: "/shares"
    },
    {
        text: "Галерея",
        href: "/catalog"
    },
    {
        text: "О нас",
        href: "/aboutus"
    },
];

// console.log(links[0].text)
function Header() {
    const linksJsx = links.map((elem, i) => {
        return <HeaderLink key={i} text={elem.text} href={elem.href} />
    })

    return (
        <nav className="w-100pc flex flex-column md-flex-row md-px-10 py-5 bg-black/50 fixed z-10 h-[80px]">
            <div className="flex justify-between">
            <a href="#" className="flex items-center p-2 mr-4 no-underline">
                <img className="max-h-l3 w-auto" src="images/logo.png" />
            </a>
            <a
                data-toggle="toggle-nav"
                data-target="#nav-items"
                href="#"
                className="flex items-center ml-auto md-hidden indigo-lighter opacity-50 hover-opacity-100 ease-300 p-1 m-3">
                <i data-feather="menu" />
            </a>
            </div>
            <div
            id="nav-items"
            className="hidden flex sm-w-100pc flex-column md-flex md-flex-row md-justify-end items-center">
                {linksJsx}
                <Form />
            </div>
        </nav>
    );
}

function HeaderLink({ href, text }) {
    return (
        <Link
            to={href}
            className="no-underline fs-s1 mx-3 py-3 hover:text-white"
        >
            {text}
        </Link>
    );
}


export default Header;