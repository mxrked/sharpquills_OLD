/**
 *
 *  This is the IndexContact
 *
 */

import { ImageWithIcon } from "../All/ImageWithIcon";
import { TextWithLinks } from "../All/TextWithLinks";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = (props) => {
  return (
    <section id="indexContact" className={`${styles.index_contact}`}>
      <div className={`${styles.index_contact_inner}`}>
        <div className={`${styles.index_contact_inner_box} container-fluid`}>
          <div className={`${styles.index_contact_inner_row} row`}>
            <div
              className={`${styles.index_contact_inner_side} ${styles.index_contact_L} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_contact_inner_side_cnt}`}>
                <TextWithLinks object={props.textWithLinksObject} />
              </div>
            </div>

            <div
              className={`${styles.index_contact_inner_side} ${styles.index_contact_R} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
            >
              <div className={`${styles.index_contact_inner_side_cnt}`}>
                <ImageWithIcon object={props.imgIconObject} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
