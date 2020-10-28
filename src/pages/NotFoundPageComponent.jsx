import React, {Component} from 'react';
import ToolbarComponent from "../components/ToolbarComponent";
import FooterComponent from "../components/FooterComponent";
import '../styles/pages/not_found_style.scss';

class NotFoundPageComponent extends Component {
    render() {
        return (
            <div className={"NotFoundContainer"}>
                <main>
                    <header>
                        <ToolbarComponent />
                    </header>

                    <div className={"Content"}>
                        <div className={"Items"}>
                            <div className={"ItemContainerCounter"}><p>k</p></div>
                            <div className={"ItemContainerCounter"}><p>v</p></div>
                            <div className={"ItemContainerCounter"}><p>n</p></div>
                            <div className={"ItemContainerCounter"}><p>z</p></div>
                            <div className={"ItemContainerCounter"}><p>i</p></div>
                            <div className={"ItemContainerCounter"}><p>x</p></div>
                            <div className={"ItemContainerCounter"}><p>k</p></div>
                            <div className={"ItemContainerCounter"}><p>m</p></div>
                            <div className={"ItemContainerCounter"}><p>e</p></div>
                            <div className={"ItemContainerCounter"}><p>t</p></div>
                            <div className={"ItemContainerCounter"}><p>a</p></div>
                            <div className={"ItemContainerCounter"}><p>x</p></div>
                            <div className={"ItemContainerCounter"}><p>l</p></div>
                            <div className={"ItemContainerCounter"}><p>4</p></div>
                            <div className={"ItemContainerCounter"}><p>0</p></div>
                            <div className={"ItemContainerCounter"}><p>4</p></div>
                            <div className={"ItemContainerCounter"}><p>y</p></div>
                            <div className={"ItemContainerCounter"}><p>y</p></div>
                            <div className={"ItemContainerCounter"}><p>w</p></div>
                            <div className={"ItemContainerCounter"}><p>v</p></div>
                            <div className={"ItemContainerCounter"}><p>b</p></div>
                            <div className={"ItemContainerCounter"}><p>o</p></div>
                            <div className={"ItemContainerCounter"}><p>q</p></div>
                            <div className={"ItemContainerCounter"}><p>d</p></div>
                            <div className={"ItemContainerCounter"}><p>y</p></div>
                            <div className={"ItemContainerCounter"}><p>p</p></div>
                            <div className={"ItemContainerCounter"}><p>a</p></div>
                            <div className={"ItemContainerCounter"}><p>p</p></div>
                            <div className={"ItemContainerCounter"}><p>a</p></div>
                            <div className={"ItemContainerCounter"}><p>g</p></div>
                            <div className={"ItemContainerCounter"}><p>e</p></div>
                            <div className={"ItemContainerCounter"}><p>v</p></div>
                            <div className={"ItemContainerCounter"}><p>j</p></div>
                            <div className={"ItemContainerCounter"}><p>a</p></div>
                            <div className={"ItemContainerCounter"}><p>n</p></div>
                            <div className={"ItemContainerCounter"}><p>o</p></div>
                            <div className={"ItemContainerCounter"}><p>t</p></div>

                        </div>
                        <div className={"TextContainer"}>
                            <h3>We couldn't find what you were looking for.</h3>
                            <p>Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exist.</p>
                            <p>Check the URL you entered for any mistakes and try again. Alternatively, search for whatever is missing or take a look around the rest of our site.</p>
                        </div>
                    </div>
                </main>
                <FooterComponent />
            </div>
        );
    }

}

export default NotFoundPageComponent;