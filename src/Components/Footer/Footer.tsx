import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
                <p>✨ Developpé avec amour par <a href="https://github.com/Dj3ni" target="_blank"><img src="/src/assets/github.png" alt="logo github" />Jenny</a> et <a href="https://github.com/Blacg13" target="_blank"><img src="/src/assets/github.png" alt="logo github" />Béné</a>, durant leur formation à <a href="https://interface3.be" target="_blank"><img src="/src/assets/IF3.png" alt="Interface3 logo" />Interface3</a> ✨</p>
                <p>Disney n'approuve ni ne sponsorise ce projet.</p>
        </footer>
    );
};

export default Footer;