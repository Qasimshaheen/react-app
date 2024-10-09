import styles from "./Button.module.css";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
export const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles[`btn-${color}`]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
