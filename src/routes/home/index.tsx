import { h } from "preact";
import { FlatFeed, NotificationDropdown, StreamApp } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import * as style from "./style.css";

interface Props {}
const Home: preact.FunctionalComponent<Props> = props => {
    return (
        <div class={style.home}>
            <h1>Life is Hard</h1>
            <p>This is the Home component.</p>
            <button onClick={()=>alert('hi')}>I am a Button</button>
            <div class={style.streamContainer}>
                <StreamApp
                    apiKey="jd5j24rnypem"
                    appId="67884"
                    token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.Ran_hYyGFwNKZuVOftcni8aYUoMfUdnSFU0nL9GE4lg">
                    <FlatFeed
                        notify={true}
                    />
                    <NotificationDropdown notify={true}/>
                </StreamApp>
            </div>
        </div>
    );
};

export default Home;
