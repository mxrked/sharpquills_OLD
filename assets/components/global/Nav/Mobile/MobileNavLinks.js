/**
 *
 *  This is the Mobile Nav Links
 *
 */

import { useRouter } from "next/router";

import { FaCaretDown } from "react-icons/fa";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavLinks = () => {
  const router = useRouter();

  return (
    <ul id="mobileNavLinks" className={`${styles.mobile_nav_links}`}>
      {router.pathname !== "/" ? (
        <li>
          <a href="/" className="orientation-change-element half-second">
            <span>Home</span>
          </a>
        </li>
      ) : (
        <li className={`${styles.disabled}`}>
          <span>Home</span>
        </li>
      )}

      {router.pathname !== "/products" ? (
        <div className="half-second" id="productsCBHolder">
          Products
          <FaCaretDown className={`${styles.icon}`} />
          <input
            id="mobileProductsCB"
            type="checkbox"
            onChange={(e) => {
              if (e.currentTarget.checked) {
                document
                  .getElementById("productsCBHolder")
                  .classList.add("toggle-dropdown");
                document.getElementById("mobileNavProductsLinks").style.height =
                  "100%";
              } else {
                document
                  .getElementById("productsCBHolder")
                  .classList.remove("toggle-dropdown");
                document.getElementById(
                  "mobileNavProductsLinks"
                ).style.height = 0;
              }
            }}
          />
        </div>
      ) : (
        <div>
          Products
          <FaCaretDown className={`${styles.icon}`} />
        </div>
      )}

      <ul id="mobileNavProductsLinks">
        <li>
          <a
            href="/store#food"
            className="orientation-change-element half-second"
          >
            <span>Food</span>
          </a>
        </li>
        <li>
          <a
            href="/store#toys"
            className="orientation-change-element half-second"
          >
            <span>Toys</span>
          </a>
        </li>
        <li>
          <a
            href="/store#housing"
            className="orientation-change-element half-second"
          >
            <span>Housing</span>
          </a>
        </li>
        <li>
          <a href="/store" className="orientation-change-element half-second">
            <span>View All</span>
          </a>
        </li>
      </ul>

      {router.pathname !== "/types" ? (
        <div className="half-second" id="typesCBHolder">
          Types
          <FaCaretDown className={`${styles.icon}`} />
          <input
            id="mobileTypesCB"
            type="checkbox"
            onChange={(e) => {
              if (e.currentTarget.checked) {
                document
                  .getElementById("typesCBHolder")
                  .classList.add("toggle-dropdown");
                document.getElementById("mobileNavTypesLinks").style.height =
                  "100%";
              } else {
                document
                  .getElementById("typesCBHolder")
                  .classList.remove("toggle-dropdown");
                document.getElementById("mobileNavTypesLinks").style.height = 0;
              }
            }}
          />
        </div>
      ) : (
        <div>
          Types
          <FaCaretDown className={`${styles.icon}`} />
        </div>
      )}

      <ul id="mobileNavTypesLinks">
        <li>
          <a
            href="/types#atelerix"
            className="orientation-change-element half-second"
          >
            <span>Atelerix</span>
          </a>
        </li>
        <li>
          <a
            href="/types#erinaceus"
            className="orientation-change-element half-second"
          >
            <span>Erinaceus</span>
          </a>
        </li>
        <li>
          <a
            href="/types#hemiechinus"
            className="orientation-change-element half-second"
          >
            <span>Hemiechinus</span>
          </a>
        </li>
        <li>
          <a
            href="/types#mesechinus"
            className="orientation-change-element half-second"
          >
            <span>Mesechinus</span>
          </a>
        </li>
        <li>
          <a
            href="/types#paraechinus"
            className="orientation-change-element half-second"
          >
            <span>Paraechinus</span>
          </a>
        </li>
        <li>
          <a href="/types" className="orientation-change-element half-second">
            <span>View All</span>
          </a>
        </li>
      </ul>

      {router.pathname !== "/info" ? (
        <li>
          <a href="/info" className="orientation-change-element half-second">
            <span>Info</span>
          </a>
        </li>
      ) : (
        <li className={`${styles.disabled}`}>
          <span>Info</span>
        </li>
      )}

      {router.pathname !== "/contact" ? (
        <li>
          <a href="/contact" className="orientation-change-element half-second">
            <span>Contact</span>
          </a>
        </li>
      ) : (
        <li className={`${styles.disabled}`}>
          <span>Contact</span>
        </li>
      )}
    </ul>
  );
};
