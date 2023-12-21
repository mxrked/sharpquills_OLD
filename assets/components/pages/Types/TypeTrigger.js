/**
 *
 *  This is the TypeTrigger
 *
 */

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import ManipColumnClassnames from "@/assets/functions/dom/manip/ManipColumnClassnames";
import CheckValidObjectProperty from "@/assets/functions/dom/checkers/CheckValidObjectProperty";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

export const TypeTrigger = (props) => {
  const DATA = props.data;
  const OBJECT = props.object;
  const STYLES_SRC = props.stylesSrc;
  const TYPE_NAME = OBJECT.typeName;
  const TYPE_IMG = OBJECT.typeImg;
  const TYPE_TRIGGER_ID = OBJECT.typeID + "_TRIGGER";
  const TYPE_MODAL_ID = OBJECT.typeID + "_MODAL";

  const VALID_NAME = CheckValidObjectProperty(TYPE_NAME);
  const VALID_IMG = CheckValidObjectProperty(TYPE_IMG);
  const VALID_TRIGGER_ID = CheckValidObjectProperty(TYPE_TRIGGER_ID);
  const VALID_MODAL_ID = CheckValidObjectProperty(TYPE_MODAL_ID);

  const COLUMN_CLASSNAMES = ManipColumnClassnames(OBJECT, DATA.length);

  return (
    <div>
      {VALID_MODAL_ID && VALID_TRIGGER_ID ? (
        <div className={`${STYLES_SRC.type_trigger} ${COLUMN_CLASSNAMES}`}>
          {VALID_IMG ? (
            <LazyLoadBackgroundImage
              image_url={TYPE_IMG}
              image_alt={`Image of ${TYPE_NAME}`}
              style_className_BG={`${STYLES_SRC.type_bg}`}
              style_className_IMG={`${STYLES_SRC.type_img}`}
            />
          ) : null}

          <div className={`${STYLES_SRC.type_overlay}`}>
            <div className={`${STYLES_SRC.type_overlay_cnt}`}>
              {VALID_NAME ? (
                <span
                  className={`${STYLES_SRC.type_name} orientation-change-element half-second`}
                >
                  {TYPE_NAME}
                </span>
              ) : null}

              <button
                onClick={(e) => {
                  document.body.style.overflowY = "hidden";
                  document.body.style.pointerEvents = "none";

                  DeclareStorageVariable("session", "Modal Opened", true);

                  document.getElementById(TYPE_MODAL_ID).style.display =
                    "block";
                  document.getElementById(TYPE_MODAL_ID).style.pointerEvents =
                    "auto";
                  document.getElementById(TYPE_MODAL_ID).style.overflowY =
                    "auto";
                }}
                className={`orientation-change-element half-second`}
              >
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
