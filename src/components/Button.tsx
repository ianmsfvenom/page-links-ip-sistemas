import styles from '../styles/Button.module.css';


interface ButtonProps {
    title: string;
    link: string;
    delay?: number;
}

export default function Button(props: ButtonProps) {
    return (
        <a href={props.link} target="_blank">
            <button className={styles.button} style={{ animationDelay: `${props.delay}s` }}>
                {props.title}
            </button>
        </a>
    );
}