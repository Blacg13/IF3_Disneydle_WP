import style from "./Header.module.css";
const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.title}>
            <img src="/src/assets/setting.png" alt="paramètres" />
            <div className={style.h1}>
            <h1 className={style.disneydle}>Disneydle</h1>
            </div>
            <img src="/src/assets/france.png" alt="langues" />
            </div>
            <h2>Devine les personnages Disney du jour !</h2>
        </div>
    );
};

export default Header;