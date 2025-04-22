import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={style.footer}>
                <p>✨ Developpé avec amour par <a href="https://github.com/Dj3ni" target="_blank"><img src="/src/assets/github.png" alt="logo github" />Jenny</a> et <a href="https://github.com/Blacg13" target="_blank"><img src="/src/assets/github.png" alt="logo github" />Béné</a> ✨</p>
                <p>Merci à Misti's Fonts pour la police "Random Wednesday" et à Justin Callaghan pour la police "Waltograph". Merci à cet artiste que je n'ai pas retrouvé pour son image de château, qui a été agrandie grâce à un générateur d'image. Merci à Béné pour les bordures du menu. Merci à <a href="https://pokedle.net/" target="_blank">Pimeko</a> pour son idée originale. </p>
                <p>Disney n'approuve ni ne sponsorise ce projet.</p>
        </footer>
    );
};

export default Footer;