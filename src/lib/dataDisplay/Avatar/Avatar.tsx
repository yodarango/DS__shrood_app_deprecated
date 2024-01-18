import { TThumbnail, Thumbnail } from "../Thumbnail";
import "./Avatar.scss";

type IAvatar = {
  label?: string;
  image: string;
  size?: number;
};
export const Avatar = (props: Omit<TThumbnail, "src" | "alt"> & IAvatar) => {
  const { label, image, width, height, size, ...rest } = props;

  const defaultSize = size || 30;
  return (
    <div className='avatar-37gh d-flex align-items-center justify-content-start '>
      <div
        className='d-flex align-items-center justify-content-center bg-tertiary'
        style={{
          width: `${(defaultSize + 5) * 0.1}rem`,
          height: `${(defaultSize + 5) * 0.1}rem`,
        }}
      >
        <Thumbnail
          {...rest}
          src={image}
          alt='user avatar'
          width={defaultSize}
          height={defaultSize}
        />
      </div>
      {label && <p className='ms-2'>{label}</p>}
    </div>
  );
};
