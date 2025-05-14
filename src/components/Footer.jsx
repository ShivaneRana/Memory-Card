import style from "../styles/Footer.module.css";

function Footer(){
    const year = new Date();

    return(
        <div className={style.mainContainer}>
            <p>{year.getFullYear()} © Odin Project Assignment by James ChenOpen in new tab. All rights reserved.</p>
        </div>
    )
}

export default Footer;