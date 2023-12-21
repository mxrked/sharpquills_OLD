/**
 *
 *  This is the TypeModal
 *
 */

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";
import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import CheckValidObjectProperty from "@/assets/functions/dom/checkers/CheckValidObjectProperty";

export const TypeModal = (props) => {
  const OBJECT = props.object;
  const STYLES_SRC = props.stylesSrc;
  const TYPE_FAMILY = OBJECT.typeFamily;
  const TYPE_NAME = OBJECT.typeName;
  const TYPE_IMG = OBJECT.typeImg;
  const TYPE_TEXT = OBJECT.typeText;
  const TYPE_MODAL_ID = OBJECT.typeID + "_MODAL";

  const VALID_NAME = CheckValidObjectProperty(TYPE_NAME);
  const VALID_FAMILY = CheckValidObjectProperty(TYPE_FAMILY);
  const VALID_IMG = CheckValidObjectProperty(TYPE_IMG);
  const VALID_TEXT = CheckValidObjectProperty(TYPE_TEXT);
  const VALID_MODAL_ID = CheckValidObjectProperty(TYPE_MODAL_ID);

  return (
    <div>
      {VALID_MODAL_ID ? (
        <div
          id={TYPE_MODAL_ID}
          className={`${STYLES_SRC.type_modal} type-modal`}
        >
          <div
            className={`${STYLES_SRC.type_modal_darken} type-modal-darken`}
          />

          <div className={`${STYLES_SRC.type_modal_inner}`}>
            <div
              className={`${STYLES_SRC.type_modal_inner_box} container-fluid`}
            >
              <div className={`${STYLES_SRC.type_modal_inner_row} row`}>
                <div
                  className={`${STYLES_SRC.type_modal_inner_side} ${STYLES_SRC.type_modal_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                >
                  {VALID_NAME && VALID_IMG ? (
                    <div className={`${STYLES_SRC.type_modal_inner_side_cnt}`}>
                      <LazyLoadBackgroundImage
                        image_url={TYPE_IMG}
                        image_alt={`Image of ${TYPE_NAME}`}
                        style_className_IMG={`${STYLES_SRC.type_modal_img}`}
                        style_className_BG={`${STYLES_SRC.type_modal_bg}`}
                      />
                    </div>
                  ) : null}
                </div>
                <div
                  className={`${STYLES_SRC.type_modal_inner_side} ${STYLES_SRC.type_modal_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
                >
                  <div className={`${STYLES_SRC.type_modal_inner_side_cnt}`}>
                    {VALID_MODAL_ID ? (
                      <button
                        onClick={(e) => {
                          RemoveStorageVariable("session", "Modal Opened");

                          document.getElementById(
                            TYPE_MODAL_ID
                          ).style.overflowY = "hidden";
                          document.getElementById(
                            TYPE_MODAL_ID
                          ).style.pointerEvents = "none";
                          document.getElementById(TYPE_MODAL_ID).style.display =
                            "none";

                          document.body.style.overflowY = "auto";
                          document.body.style.pointerEvents = "auto";
                        }}
                        className={`orientation-change-element half-second`}
                      >
                        <span>Close</span>
                      </button>
                    ) : null}

                    {VALID_NAME ? (
                      <span
                        className={`${STYLES_SRC.type_name} orientation-change-element half-second`}
                      >
                        {TYPE_NAME}
                      </span>
                    ) : null}

                    {VALID_FAMILY ? (
                      <span
                        className={`${STYLES_SRC.type_family} orientation-change-element half-second`}
                      >
                        {TYPE_FAMILY}
                      </span>
                    ) : null}

                    {VALID_TEXT ? (
                      <p
                        className={`${STYLES_SRC.type_text} orientation-change-element half-second`}
                      >
                        {TYPE_TEXT}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
