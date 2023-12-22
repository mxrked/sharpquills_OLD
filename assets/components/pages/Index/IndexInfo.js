/**
 *
 *  This is the IndexInfo
 *
 */

import { ImageWithIcon } from "../All/ImageWithIcon";
import { TextWithLinks } from "../All/TextWithLinks";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexInfo = (props) => {
  return (
    <section id="indexInfo" className={`${styles.index_info}`}>
      <div className={`${styles.index_info_inner}`}>
        <div className={`${styles.index_info_inner_box} container-fluid`}>
          <div className={`${styles.index_info_inner_row} row`}>
            <div
              className={`${styles.index_info_inner_side} ${styles.index_info_L} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_info_inner_side_cnt}`}>
                <ImageWithIcon object={props.imgIconObject} />
              </div>
            </div>

            <div
              className={`${styles.index_info_inner_side} ${styles.index_info_R} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_info_inner_side_cnt}`}>
                <TextWithLinks object={props.textWithLinksObject} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
