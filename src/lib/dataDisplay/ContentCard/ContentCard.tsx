import React from "react";
import { Thumbnail } from "../Thumbnail";

import "./ContentCard.scss";

type TContentCard = {
  onOpenMenu: () => void;
  onClick?: () => void;
  description?: string;
  className?: string;
  title?: string;
  image: string;
  meta?: string;
};
export const ContentCard = (props: TContentCard) => {
  const { className, image, title, meta, onOpenMenu, onClick, description } =
    props;

  return (
    <div
      className={`${className} content-card-93hx d-flex align-items-start justify-content-start p-2 gap-4`}
      style={{ height: description ? `13rem` : `8rem` }}
    >
      <div className='content-card-93hx__image' onClick={onClick}>
        <Thumbnail
          alt={description || "thumbnail for a content card"}
          className='flex-shrink-0'
          height={description ? 110 : 60}
          width={80}
          src={image}
        />
      </div>

      <div onClick={onClick} className='content-card-93hx__info'>
        <div className='d-flex align-items-center justify-content-start gap-2'>
          <div className='w-100'>
            <h4 className={description ? "mb-2" : ""}>{title}</h4>
            {description && (
              <p className='content-card-93hx__description'>{description}</p>
            )}
          </div>
          {meta && (
            <div className='content-card-93hx__meta-tag bg-tertiary px-2'>
              {meta}
            </div>
          )}
        </div>

        <div className='d-flex align-items-start justify-content-start flex-shrink-0'>
          <button onClick={onOpenMenu} className='bg-transparent p-0 m-0'>
            <span className='icon icon-ellipsis' />
          </button>
        </div>
      </div>
    </div>
  );
};
