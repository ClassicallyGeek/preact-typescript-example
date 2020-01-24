import { h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";
import logo from '../../assets/logo.svg';

const Header: preact.FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <img src={logo} class={style.logo} />
        </header>
    );
};

export default Header;
