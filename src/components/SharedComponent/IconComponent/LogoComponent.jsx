import Logo from "/TicTacToeIcon.svg"

function LogoComponent() {
    return(
        <a href="#" className="flex title-font font-medium items-center mb-4 md:mb-0 hover:text-gray-900">
            <img src={Logo} alt="Icone Tic-Tac-Toe" className="w-6 h-6" />
            <span className="ml-3 text-xl">Tic Tac Toe</span>
        </a>
    );
}

export default LogoComponent