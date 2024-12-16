import styles from "../styles/ListButtons.module.css";
import Button from "./Button";

const buttons = [
    { title: "Visite nosso site", link: "https://ip-sistemas.vercel.app" },
    { title: "Solicite um orçamento", link: "https://api.whatsapp.com/send?phone=557187645787&text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento." },
];

export default function ListButtons() {
    return (
        <div className={styles.list}>
            {buttons.map((button) => (
                <Button link={button.link} title={button.title} />
            ))}
        </div>
    );
}