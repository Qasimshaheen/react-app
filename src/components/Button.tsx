interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
export const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
};
