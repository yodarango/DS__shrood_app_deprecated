import { Portal } from "@mui/base/Portal";
import "./Modal.scss";
import { If } from "../../utils";

type TModal = {
  children: any;
  onClose: () => void;
  open: boolean;
  title: string;
};
export const Modal = (props: TModal) => {
  const { children, onClose, open, title } = props;
  return (
    <Portal>
      <If condition={open}>
        <div className='shrood-modal-0elj'>
          <div className='shrood-modal-0elj__content p-4'>
            <h4 className='mb-2 text-center'>{title}</h4>
            <div> {children}</div>
          </div>
          <div className='shrood-modal-0elj__backdrop' onClick={onClose}></div>
        </div>
      </If>
    </Portal>
  );
};
