import { h } from "preact";
import * as style from "./style.css";

interface Props {}
const Home: preact.FunctionalComponent<Props> = props => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
            <button onClick={()=>alert('hi')}>I am a Button</button>
        </div>
    );
};

export default Home;
