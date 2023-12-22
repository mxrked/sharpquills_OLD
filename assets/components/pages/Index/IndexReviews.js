/**
 *
 *  This is the IndexReviews
 *
 */

import { Review } from "../Info/Review";

import HeadingElement from "@/assets/functions/dom/elements/HeadingElement";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexReviews = (props) => {
  const HEADING_TEXT = HeadingElement(
    "What other Hedgehog",
    "owners have said."
  );

  return (
    <section id="indexReviews" className={`${styles.index_reviews}`}>
      <div className={`${styles.index_reviews_inner}`}>
        <div className={`${styles.index_reviews_inner_top}`}>
          <div className={`${styles.index_reviews_inner_top_cnt}`}>
            <h2 className="orientation-change-element half-second">
              {HEADING_TEXT}
            </h2>

            <p className="orientation-change-element half-second">
              All of our consumers and fellow Hedgehog lovers have stated our
              services are of high quality and safety is a priority.
            </p>
          </div>
        </div>

        <div className={`${styles.index_reviews_inner_box} container-fluid`}>
          <div className={`${styles.index_reviews_inner_row} row`}>
            {props.data.map((object) => (
              <Review data={props.data} object={object} stylesSrc={styles} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
