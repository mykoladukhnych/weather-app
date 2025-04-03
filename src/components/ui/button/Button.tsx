import styles from './button.module.css';

interface IButtonProps {
    text: string;
    type?: "button" | "reset" | "submit"
    onPress: () => void
}

export default function Button({text, type="button", onPress}: IButtonProps) {
    return (
        <button className={styles.btn} type={type} onClick={onPress}>{text}</button>
    )
}
