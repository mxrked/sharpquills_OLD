/**
 *
 *  This is the ImageWithIcon
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";

export const ImageWithIcon = (props) => {
  const OBJECT = props.object;
  const STYLES = OBJECT.stylesSrc;
  const IMG_SRC = OBJECT.imgSrc;
  const ICON_SRC = OBJECT.iconSrc;

  return (
    <div id={OBJECT.id} className={`${STYLES.image_with_icon}`}>
      <div className={`${STYLES.image_with_icon_inner}`}>
        <div className={`${STYLES.image_with_icon_inner_IMG_holder}`}>
          {IMG_SRC !== "" && IMG_SRC !== undefined && IMG_SRC !== null ? (
            <LazyLoadImage
              src={IMG_SRC}
              className={`${STYLES.image_with_icon_inner_IMG}`}
            />
          ) : null}
        </div>

        {ICON_SRC !== "" && ICON_SRC !== undefined && ICON_SRC !== null ? (
          <LazyLoadImage
            src={ICON_SRC}
            className={`${STYLES.image_with_icon_inner_ICON}`}
          />
        ) : null}
      </div>
    </div>
  );
};
