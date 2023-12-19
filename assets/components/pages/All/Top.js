/**
 *
 *  This is the Top for each page
 *
 */

import { LazyLoadImage } from "react-lazy-load-image-component";

import { LazyLoadBackgroundImage } from "../../global/All/LazyLoadBackgroundImage";

import { WHITE_WAVE } from "@/assets/cdns/CDNImgs";

export const Top = (props) => {
  const OBJECT = props.object;
  const STYLES = OBJECT.stylesSrc;
  const BG = OBJECT.bg;
  const TOP_TEXT = OBJECT.topText;
  const HEADING = OBJECT.heading;
  const TEXT = OBJECT.text;
  const LINKS = OBJECT.links;
  const DIVIDER_TYPE = OBJECT.dividerType;

  return (
    <section id={OBJECT.id} className={`${STYLES.page_top} half-second`}>
      {OBJECT.id !== "" && OBJECT.id !== undefined && OBJECT.id !== null ? (
        <div>
          <div className={`${STYLES.page_top_main}`}>
            <LazyLoadBackgroundImage
              image_url={BG}
              image_alt={"Top background image."}
              style_className_IMG={STYLES.page_top_main_bg_IMG}
              style_className_BG={STYLES.page_top_main_bg_BG}
            />

            <div className={`${STYLES.page_top_main_overlay}`}>
              <div className={`${STYLES.page_top_main_overlay_cnt}`}>
                {TOP_TEXT !== "" &&
                TOP_TEXT !== undefined &&
                TOP_TEXT !== null ? (
                  <span className={`${STYLES.page_top_main_top_text}`}>
                    {TOP_TEXT}
                  </span>
                ) : null}
                <br />
                {HEADING !== "" && HEADING !== undefined && HEADING !== null ? (
                  <span className={`${STYLES.page_top_main_heading}`}>
                    {HEADING}
                  </span>
                ) : null}
                <br />
                {TEXT !== "" && TEXT !== undefined && TEXT !== null ? (
                  <p className={`${STYLES.page_top_main_text}`}>{TEXT}</p>
                ) : null}
                {LINKS !== "" &&
                LINKS !== undefined &&
                LINKS !== null &&
                LINKS.length > 0 ? (
                  <ul>
                    {LINKS.map((link) => (
                      <li key={link.linkID}>
                        <a
                          href={link.linkRoute}
                          className="half-second orientation-change-element"
                        >
                          <span>{link.linkName}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>

          {DIVIDER_TYPE == "wave" ? (
            <LazyLoadImage
              src={WHITE_WAVE}
              className={STYLES.page_top_white_wave}
            />
          ) : null}

          {DIVIDER_TYPE == "slanted" ? (
            <div className={STYLES.slanted} />
          ) : null}
        </div>
      ) : null}
    </section>
  );
};
