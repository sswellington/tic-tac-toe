import LogoComponent from "../components/SharedComponent/IconComponent/LogoComponent";
import CopyrightComponent from "../components/SharedComponent/CopyrightComponent";

import InstagramComponent from "../components/SharedComponent/IconComponent/InstagramComponent";
import LinkedinComponent from "../components/SharedComponent/IconComponent/LinkedinComponent";
import TwitterComponent from "../components/SharedComponent/IconComponent/TwitterComponent";

function FooterPattern() {
    return(
        <footer className="text-gray-600 body-font ">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <LogoComponent/>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
                <CopyrightComponent/>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"></span>
                <TwitterComponent/>
                <LinkedinComponent/>
                <InstagramComponent/>
            </div>
        </footer>
    );
}

export default FooterPattern;