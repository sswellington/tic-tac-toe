import NavComponent from "../components/HeaderComponent/NavComponent";
import LogoComponent from "../components/SharedComponent/IconComponent/LogoComponent";

function  HeaderPattern() {
    return(
        <header className="text-gray-600 body-font ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <LogoComponent/>
                <NavComponent/>
            </div>
        </header>
    );
}

export default HeaderPattern;