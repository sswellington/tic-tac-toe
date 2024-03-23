import HeaderPattern from "../patterns/HeaderPattern";
import FooterPattern from "../patterns/FooterPattern";

import AboutObject from "../objects/AboutObject";

function AboutPage() {
    return(
        <>
            <HeaderPattern/>
            <AboutObject/>
            <FooterPattern/>
        </>
    );
}

export default AboutPage;