/**
 *
 *  This is the Review
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";

import ManipColumnClassnames from "@/assets/functions/dom/manip/ManipColumnClassnames";
import CheckValidObjectProperty from "@/assets/functions/dom/checkers/CheckValidObjectProperty";

export const Review = (props) => {
  const DATA = props.data;
  const OBJECT = props.object;
  const STYLES_SRC = props.stylesSrc;
  const REVIEW_NAME = OBJECT.reviewName;
  const REVIEW_IMG = OBJECT.reviewImg;
  const REVIEW_DATE = OBJECT.reviewDate;
  const REVIEW_TEXT = OBJECT.reviewText;

  const VALID_REVIEW_NAME = CheckValidObjectProperty(REVIEW_NAME);
  const VALID_REVIEW_IMG = CheckValidObjectProperty(REVIEW_IMG);
  const VALID_REVIEW_DATE = CheckValidObjectProperty(REVIEW_DATE);
  const VALID_REVIEW_TEXT = CheckValidObjectProperty(REVIEW_TEXT);
  const VALID_OBJECT = CheckValidObjectProperty(OBJECT);

  const COLUMN_CLASSNAMES = ManipColumnClassnames(OBJECT, DATA.length);

  return (
    <div>
      {VALID_OBJECT ? (
        <div className={`${STYLES_SRC.review} ${COLUMN_CLASSNAMES}`}>
          <div className={`${STYLES_SRC.review_inner}`}>
            <div className={`${STYLES_SRC.review_inner_top}`}>
              {VALID_REVIEW_IMG ? (
                <div
                  className={`${STYLES_SRC.review_img_holder} orientation-change-element half-second`}
                >
                  <LazyLoadImage
                    src={REVIEW_IMG}
                    alt={`Image of ${REVIEW_NAME}.`}
                  />
                </div>
              ) : null}

              {VALID_REVIEW_NAME && VALID_REVIEW_DATE ? (
                <div className={`${STYLES_SRC.review_name_and_date}`}>
                  <span
                    className={`${STYLES_SRC.review_name} orientation-change-element half-second`}
                  >
                    {REVIEW_NAME}
                  </span>
                  <span
                    className={`${STYLES_SRC.review_date} orientation-change-element half-second`}
                  >
                    {REVIEW_DATE}
                  </span>
                </div>
              ) : null}
            </div>

            {VALID_REVIEW_TEXT ? (
              <p className="orientation-change-element half-second">
                {REVIEW_TEXT}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};
