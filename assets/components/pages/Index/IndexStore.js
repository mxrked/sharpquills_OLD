/**
 *
 *  This is the IndexStore
 *
 */

import { ImageWithIcon } from "../All/ImageWithIcon";
import { TextWithLinks } from "../All/TextWithLinks";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexStore = (props) => {
  return (
    <section id="indexStore" className={`${styles.index_store}`}>
      <div className={`${styles.index_store_inner}`}>
        <div className={`${styles.index_store_inner_box} container-fluid`}>
          <div className={`${styles.index_store_inner_row} row`}>
            <div
              className={`${styles.index_store_inner_side} ${styles.index_store_L} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_store_inner_side_cnt}`}>
                <ImageWithIcon object={props.imgIconObject} />
              </div>
            </div>

            <div
              className={`${styles.index_store_inner_side} ${styles.index_store_R} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_store_inner_side_cnt}`}>
                <TextWithLinks object={props.textWithLinksObject} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
