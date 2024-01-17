import { Input as MInput, InputProps } from "@mui/base/Input";
import "./Input.scss";

interface IInput {
  danger?: boolean;
}
export const Input = (props: InputProps & IInput) => {
  const { danger, className, ...rest } = props;

  const dangerClass = danger ? "danger" : "";

  return <MInput {...rest} className={`${dangerClass} ${className}`} />;
};
