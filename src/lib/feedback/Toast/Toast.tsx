type TToast = {
  children?: any;
  type?: "success" | "danger" | "warning" | "info" | "default";
  icon?: string;
  title?: string;
};

import "./Toast.scss";

export const Toast = (props: TToast) => {
  const { icon, children, title, type } = props;
  let cardClass;

  switch (type) {
    case "success":
      cardClass = "bg-success--20 border-success--40";
      break;
    case "danger":
      cardClass = "bg-danger--20 border-danger--40";
      break;
    case "warning":
      cardClass = "bg-warning--20 border-warning--40";
      break;
    case "info":
      cardClass = "bg-info--20 border-info--40";
      break;
    case "default":
      cardClass = "font-color--20 border-font-color--40";
      break;
    default:
      cardClass = "font-color--20 border-font-color--40";
      break;
  }

  return (
    <div
      className={`toast-04hl p-3 ${cardClass} d-flex align-items-center justify-content-start gap-3`}
    >
      {icon && <span className={`icon icon-${icon} flex-shrink-0`} />}
      <div className='w-100'>
        <h5>{title}</h5>
        <p className='text-tertiary--500'>{children}</p>
      </div>
    </div>
  );
};
