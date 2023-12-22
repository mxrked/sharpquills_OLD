/**
 *
 *  This is the TextWithLinks
 *
 */

export const TextWithLinks = (props) => {
  const OBJECT = props.object;
  const HEADING_TEXT = OBJECT.headingText;
  const MAIN_TEXT = OBJECT.mainText;
  const LINKS = OBJECT.links;
  const STYLES = OBJECT.stylesSrc;

  return (
    <div id={OBJECT.id} className={`${STYLES.text_with_links}`}>
      {HEADING_TEXT !== "" &&
      HEADING_TEXT !== undefined &&
      HEADING_TEXT !== null ? (
        <h2
          className={`${STYLES.heading_text} orientation-change-element half-second`}
        >
          {HEADING_TEXT}
        </h2>
      ) : null}

      {MAIN_TEXT !== "" && MAIN_TEXT !== undefined && MAIN_TEXT !== null ? (
        <p
          className={`${STYLES.main_text} orientation-change-element half-second`}
        >
          {MAIN_TEXT}
        </p>
      ) : null}

      {LINKS.length !== 0 ? (
        <ul>
          {LINKS.map((link) => (
            <li key={link.linkID}>
              <a
                className={`${
                  STYLES[link.linkID]
                } orientation-change-element half-second`}
                href={link.linkRoute}
              >
                <span>{link.linkName}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
