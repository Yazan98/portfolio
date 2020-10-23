import React, {Component} from 'react';
import '../styles/fragments/fragments_style.scss';
import DenamoTheme from '../images/projects/denamo.png';
import ThentromTheme from '../images/projects/thentrom.png';

class ThemesSectionComponent extends Component {
    render() {
        return (
            <div className={"ThemesSectionComponent"}>

                <div className={"Item"}>
                    <div className={"Icon"}>
                        <img src={DenamoTheme} alt={"Denamo Theme"}/>
                    </div>
                    <div className={"Description"}>
                        <div className={"Content"}>
                            <h4>Denamo Theme</h4>
                            <p>This Theme is a Dark Theme To Build Typescript Apps With This Blue Color Effect and Dark
                                Theme to give the developer a nice environment to work</p>
                            <div className={"Button"}>
                                <a href={"https://marketplace.visualstudio.com/items?itemName=YazanTarifi.denamo"}>Download Theme</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"Item"}>
                    <div className={"Icon"}>
                        <img src={ThentromTheme} alt={"Denamo Theme"}/>
                    </div>
                    <div className={"Description"}>
                        <div className={"Content"}>
                            <h4>Thentrom Theme</h4>
                            <p>Intellij Theme To Make The Ide Looks Like Orange, Yellow Color For Kotlin Developers who want to Code Android Apps and Backend Apps With Kotlin</p>
                            <div className={"Button"}>
                                <a href={"https://github.com/Yazan98/Thentrom"}>Download Theme</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ThemesSectionComponent;