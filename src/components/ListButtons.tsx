import styles from "../styles/ListButtons.module.css";
import Button from "./Button";

const buttons = [
    { title: "SAIBA MAIS SOBRE NÓS", link: "https://ip-sistemas.vercel.app" },
    { title: "SOLICITE UM ORÇAMENTO", link: "https://api.whatsapp.com/send?phone=557187645787&text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento." },
    { title: "VEJA UMA DEMONSTRAÇÃO!", link: "https://demo.filamentphp.com" },
];

export default function ListButtons() {
    return (
        <div className={styles.list}>
            {buttons.map((button, index) => (
                <Button link={button.link} title={button.title} delay={index + 1} />
            ))}
        </div>
    );
}