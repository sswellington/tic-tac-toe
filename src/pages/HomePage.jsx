import HeaderPattern from "../patterns/HeaderPattern";
import FooterPattern from "../patterns/FooterPattern";

import LoremInclude from "../include/LoremInclude";

function HomePage() {
    return(
        <>
            <HeaderPattern/>
            <LoremInclude/>
            <FooterPattern/>
        </>
    );
}

export default HomePage;