/**
 *
 *  This is the Mobile Nav
 *
 */

import { useState } from "react";
import { useRouter } from "next/router";

import {
  FaCaretDown,
  FaHamburger,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { LOGO } from "@/assets/cdns/CDNIcons";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav}`}>
      <div className={`${styles.mobile_nav_inner}`}>
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                {router.pathname !== "/" ? (
                  <a href="/" className={`${styles.logo} logo`} title="Go Home">
                    <LazyLoadImage
                      src={LOGO}
                      alt="Sharpquills Logo."
                      title="Sharpquills Logo."
                    />

                    <div>
                      <span
                        className={`${styles.top_text} half-second orientation-change-element`}
                      >
                        sharpquills
                      </span>
                      <span
                        className={`${styles.bottom_text} half-second orientation-change-element`}
                      >
                        All Things Hedgie
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className={`${styles.logo} logo`}>
                    <LazyLoadImage
                      src={LOGO}
                      alt="Sharpquills Logo."
                      title="Sharpquills Logo."
                    />

                    <div>
                      <span
                        className={`${styles.top_text} half-second orientation-change-element`}
                      >
                        sharpquills
                      </span>
                      <span
                        className={`${styles.bottom_text} half-second orientation-change-element`}
                      >
                        All Things Hedgie
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                {router.pathname !== "/cart" ? (
                  <a href="/cart" className={`${styles.cart_link}`}>
                    <FaShoppingCart
                      className={`${styles.icon} half-second orientation-change-element`}
                    />

                    <div>
                      <span className="cart-counter">...</span>
                    </div>
                  </a>
                ) : (
                  <div className={`${styles.cart_link}`}>
                    <FaShoppingCart
                      className={`${styles.icon} half-second orientation-change-element`}
                    />

                    <div>
                      <span className="cart-counter">...</span>
                    </div>
                  </div>
                )}

                <div className={`${styles.mobile_nav_btns}`}>
                  <FaTimes
                    id="closer"
                    className={`${styles.icon} half-second orientation-change-element`}
                  />
                  <div id="toggler">
                    <span
                      className={`half-second orientation-change-element`}
                    />
                    <span
                      className={`half-second orientation-change-element`}
                    />
                    <span
                      className={`half-second orientation-change-element`}
                    />
                  </div>

                  <input
                    type="checkbox"
                    id="togglerCloserCB"
                    onChange={(e) => {
                      if (e.currentTarget.checked) {
                        document.getElementById("toggler").style.display =
                          "none";
                        document.getElementById("closer").style.display =
                          "block";
                        document.getElementById(
                          "mobileNavLinks"
                        ).style.display = "block";
                        document.getElementById("mobileNavLinks").style.height =
                          "100%";

                        document.getElementById(
                          "mobileNavLinksOverlay"
                        ).style.display = "block";
                      } else {
                        document.getElementById("toggler").style.display =
                          "block";
                        document.getElementById("closer").style.display =
                          "none";

                        document.getElementById(
                          "mobileProductsCB"
                        ).checked = false;
                        document.getElementById(
                          "mobileTypesCB"
                        ).checked = false;
                        document
                          .getElementById("productsCBHolder")
                          .classList.remove("toggle-dropdown");
                        document
                          .getElementById("typesCBHolder")
                          .classList.remove("toggle-dropdown");

                        document.getElementById(
                          "mobileNavTypesLinks"
                        ).style.height = 0;
                        document.getElementById(
                          "mobileNavProductsLinks"
                        ).style.height = 0;

                        document.getElementById(
                          "mobileNavLinks"
                        ).style.display = "none";
                        document.getElementById(
                          "mobileNavLinks"
                        ).style.height = 0;

                        document.getElementById(
                          "mobileNavLinksOverlay"
                        ).style.display = "none";
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
