import React from "react";
import "./Button.scss";
import { Button as MButton, ButtonProps } from "@mui/base/Button";
import { IfElse } from "../../utils";
import { Loading } from "../../";

interface IButton {
  secondary?: boolean;
  loading?: boolean;
  primary?: boolean;
  success?: boolean;
  danger?: boolean;
}

export const Button = (props: IButton & ButtonProps) => {
  const {
    className = "",
    secondary,
    children,
    disabled,
    primary,
    success,
    loading,
    danger,
    ...rest
  } = props;

  const color = secondary
    ? "secondary"
    : danger
    ? "danger"
    : success
    ? "success"
    : "primary";

  return (
    <MButton
      {...rest}
      disabled={loading || disabled}
      className={`d-flex align-items-center justify-content-center ${className} ${color}`}
    >
      {loading && <Loading type='small' className='me-2' primary={success} />}
      {children}
    </MButton>
  );
};
