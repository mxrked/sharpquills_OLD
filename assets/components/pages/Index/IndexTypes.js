/**
 *
 *  This is the IndexTypes
 *
 */

import { TypeTrigger } from "../Types/TypeTrigger";

import HeadingElement from "@/assets/functions/dom/elements/HeadingElement";

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
          <div className={`${styles.index_types_inner_row} row`}>
            {props.data.map((object) => (
              <TypeTrigger
                data={props.data}
                object={object}
                stylesSrc={styles}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
