import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div>
            <img src="/src/assets/setting.png" alt="paramètres" />
            <div>
            <h1>
                <Link to="/">
                Disneydle
                </Link>
            </h1>
            </div>
            <img src="/src/assets/france.png" alt="langues" />
            </div>
        </header >
    );
};

export default Header;