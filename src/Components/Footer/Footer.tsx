import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={style.logo}>
                <a href="https://github.com/Blacg13" target="_blank"><img src="/src/assets/github.png" alt="logo github" /></a>
                <a href="https://interface3.be" target="_blank"><img src="/src/assets/IF3.png" alt="Interface3 logo" /></a>
                
            </div>
            <p className={style.copyright}>disneydle.net — 2025</p>
            <p className={style.disclaimer}>Disney n'approuve ni ne sponsorise ce projet.</p>
            <a href="">Politique de confidentialité</a>
        </footer>
    );
};

export default Footer;