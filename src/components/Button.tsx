import styles from '../styles/Button.module.css';


interface ButtonProps {
    title: string;
    link: string;
}

export default function Button(props: ButtonProps) {
    return (
        <a href={props.link} target="_blank">
            <button className={styles.button}>
                {props.title}
            </button>
        </a>
    );
}