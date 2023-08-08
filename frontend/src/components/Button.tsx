import { useNavigate } from "react-router-dom";

type ButtonProps = {
  buttonText: string;
  toPath?: string;
  disabled: boolean;
  function?: () => void;
}
function Button (props: ButtonProps): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.function)
    props.function();

    if (props.toPath)
    navigate(props.toPath);
  }

  return (
    <button type="button" onClick={handleClick} disabled={props.disabled}>{props.buttonText}</button>
  )
}

export default Button;