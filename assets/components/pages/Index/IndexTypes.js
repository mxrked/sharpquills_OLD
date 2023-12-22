/**
 *
 *  This is the IndexTypes
 *
 */

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import HeadingElement from "@/assets/functions/dom/elements/HeadingElement";

import {
  ATELERIX_TYPE,
  ERINACEUS_TYPE,
  HEMIECHINUS_TYPE,
  MESECHINUS_TYPE,
  PARAECHINUS_TYPE,
} from "../../../cdns/CDNImgs";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTypes = (props) => {
  const HEADING_TEXT = HeadingElement(
    "Become familiar with",
    "all types of Hedgehog"
  );

  return (
    <section id="indexTypes" className={`${styles.index_types}`}>
      <div className={`${styles.index_types_inner}`}>
        <div className={`${styles.index_types_inner_top}`}>
          <div className={`${styles.index_types_inner_top_cnt}`}>
            <h2 className="orientation-change-element half-second">
              {HEADING_TEXT}
            </h2>

            <p className="orientation-change-element half-second">
              There are 17 different species of Hedgehog. All of which have very
              interested characteristics and backgrounds!
            </p>
          </div>
        </div>

        <div className={`${styles.index_types_inner_box} container-fluid`}>
          <div
            className={`${styles.index_types_inner_row} ${styles.row_1} row`}
          >
            <div
              className={`${styles.index_types_inner_side} ${styles.index_types_L} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_types_inner_side_cnt}`}>
                <LazyLoadBackgroundImage
                  image_url={ATELERIX_TYPE}
                  image_alt={`Image of an Atelerix hedgehog.`}
                  style_className_IMG={`${styles.type_img}`}
                  style_className_BG={`${styles.type_bg}`}
                />

                <div className={`${styles.overlay}`}>
                  <div>
                    <span className="orientation-change-element half-second">
                      Atelerix
                    </span>
                    <a
                      href="/types#atelerix"
                      className="orientation-change-element half-second"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.index_types_inner_side} ${styles.index_types_M} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_types_inner_side_cnt}`}>
                <LazyLoadBackgroundImage
                  image_url={ERINACEUS_TYPE}
                  image_alt={`Image of an Erinaceus hedgehog.`}
                  style_className_IMG={`${styles.type_img}`}
                  style_className_BG={`${styles.type_bg}`}
                />

                <div className={`${styles.overlay}`}>
                  <div>
                    <span className="orientation-change-element half-second">
                      Erinaceus
                    </span>
                    <a
                      href="/types#erinaceus"
                      className="orientation-change-element half-second"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.index_types_inner_side} ${styles.index_types_R} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_types_inner_side_cnt}`}>
                <LazyLoadBackgroundImage
                  image_url={HEMIECHINUS_TYPE}
                  image_alt={`Image of an Hemiechinus hedgehog.`}
                  style_className_IMG={`${styles.type_img}`}
                  style_className_BG={`${styles.type_bg}`}
                />

                <div className={`${styles.overlay}`}>
                  <div>
                    <span className="orientation-change-element half-second">
                      Hemiechinus
                    </span>
                    <a
                      href="/types#hemiechinus"
                      className="orientation-change-element half-second"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.index_types_inner_row} ${styles.row_2} row`}
          >
            <div
              className={`${styles.index_types_inner_side} ${styles.index_types_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_types_inner_side_cnt}`}>
                <LazyLoadBackgroundImage
                  image_url={MESECHINUS_TYPE}
                  image_alt={`Image of an Mesechinus hedgehog.`}
                  style_className_IMG={`${styles.type_img}`}
                  style_className_BG={`${styles.type_bg}`}
                />

                <div className={`${styles.overlay}`}>
                  <div>
                    <span className="orientation-change-element half-second">
                      Mesechinus
                    </span>
                    <a
                      href="/types#mesechinus"
                      className="orientation-change-element half-second"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.index_types_inner_side} ${styles.index_types_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_types_inner_side_cnt}`}>
                <LazyLoadBackgroundImage
                  image_url={PARAECHINUS_TYPE}
                  image_alt={`Image of an Paraechinus hedgehog.`}
                  style_className_IMG={`${styles.type_img}`}
                  style_className_BG={`${styles.type_bg}`}
                />

                <div className={`${styles.overlay}`}>
                  <div>
                    <span className="orientation-change-element half-second">
                      Paraechinus
                    </span>
                    <a
                      href="/types#paraechinus"
                      className="orientation-change-element half-second"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
