import LoremInclude from "../include/LoremInclude";
import FooterPattern from "../patterns/FooterPattern";
import HeaderPattern from "../patterns/HeaderPattern";

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