/**
 *
 *  This is the ImageWithIcon
 *
 */

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";
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
            <LazyLoadBackgroundImage
              image_url={IMG_SRC}
              image_alt={`Image of European hedgehog walking in leaves.`}
              style_className_IMG={`${STYLES.img}`}
              style_className_BG={`${STYLES.bg}`}
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
