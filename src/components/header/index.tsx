import { h } from "preact";
import Logo from '../../assets/logo.svg';
import * as style from "./style.css";

const Header: preact.FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <div class={style.logo}>
                <Logo width={240} />
            </div>
        </header>
    );
};

export default Header;
