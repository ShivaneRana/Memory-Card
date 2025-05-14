import style from "../styles/Footer.module.css";

function Footer() {
    const year = new Date();

    return (
        <div className={style.mainContainer}>
            <p>
                {year.getFullYear()} © Odin Project Assignment by{" "}
                <span
                    title="Open github"
                    onClick={() => {
                        window.open("https://github.com/ShivaneRana", "_blank");
                    }}
                >
                    Shivane Rana
                </span>
                . All rights reserved.
            </p>
        </div>
    );
}

export default Footer;
