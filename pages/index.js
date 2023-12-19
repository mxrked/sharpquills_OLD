// React/Next Imports
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import SaveCartItems from "@/assets/functions/data/cart/SaveCartItems";
import HeadingElement from "@/assets/functions/dom/elements/HeadingElement";

import {
  INDEX_TOP_BG,
  INDEX_STORE_BG,
  INDEX_INFO_BG,
} from "@/assets/cdns/CDNBgs";
import { HEDGEHOG_5, HEDGEHOG_7 } from "@/assets/cdns/CDNIcons";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavLinks } from "@/assets/components/global/Nav/Mobile/MobileNavLinks";

import { PageFade } from "@/assets/animations/components/PageFade";

import { Top } from "@/assets/components/pages/All/Top.js";
import { ImageWithIcon } from "@/assets/components/pages/All/ImageWithIcon";

// Style Imports
import styles from "../assets/styles/modules/Nav/Nav.module.css";
import index_styles from "../assets/styles/modules/Index/Index.module.css";

export async function getServerSideProps() {
  const PAGE_HEAD_DATA_DIRECTORY = "public/data/Page_Head_Data/";
  const STORE_DATA_DIRECTORY = "public/data/Store_Data/";
  const UTF8 = "utf-8";

  const PH_ICONS_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Icons.json"
  );
  const PH_DATA_FP = path.join(
    process.cwd(),
    PAGE_HEAD_DATA_DIRECTORY,
    "PH_Index.json"
  );
  const FOOD_ITEMS_DATA_FP = path.join(
    process.cwd(),
    STORE_DATA_DIRECTORY,
    "Food.json"
  );
  const TOY_ITEMS_DATA_FP = path.join(
    process.cwd(),
    STORE_DATA_DIRECTORY,
    "Toys.json"
  );
  const HOUSING_ITEMS_DATA_FP = path.join(
    process.cwd(),
    STORE_DATA_DIRECTORY,
    "Housing.json"
  );

  const PH_ICONS_DATA_FC = fs.readFileSync(PH_ICONS_DATA_FP, UTF8);
  const PH_DATA_FC = fs.readFileSync(PH_DATA_FP, UTF8);
  const FOOD_ITEMS_DATA_FC = fs.readFileSync(FOOD_ITEMS_DATA_FP, UTF8);
  const TOY_ITEMS_DATA_FC = fs.readFileSync(TOY_ITEMS_DATA_FP, UTF8);
  const HOUSING_ITEMS_DATA_FC = fs.readFileSync(HOUSING_ITEMS_DATA_FP, UTF8);

  let PH_ICONS_DATA = undefined;
  let PH_DATA = undefined;
  let FOOD_ITEMS_DATA = undefined;
  let TOY_ITEMS_DATA = undefined;
  let HOUSING_ITEMS_DATA = undefined;

  try {
    PH_ICONS_DATA = JSON.parse(PH_ICONS_DATA_FC);
    PH_DATA = JSON.parse(PH_DATA_FC);
    FOOD_ITEMS_DATA = JSON.parse(FOOD_ITEMS_DATA_FC);
    TOY_ITEMS_DATA = JSON.parse(TOY_ITEMS_DATA_FC);
    HOUSING_ITEMS_DATA = JSON.parse(HOUSING_ITEMS_DATA_FC);

    return {
      props: {
        PH_ICONS_DATA,
        PH_DATA,
        FOOD_ITEMS_DATA,
        TOY_ITEMS_DATA,
        HOUSING_ITEMS_DATA,
      },
    };
  } catch (error) {
    console.error("Error while fetching data: " + error);

    return {
      props: {
        PH_ICONS_DATA: null,
        PH_DATA: null,
        FOOD_ITEMS_DATA: null,
        TOY_ITEMS_DATA: null,
        HOUSING_ITEMS_DATA: null,
      },
    };
  }
}

export default function Home({
  PH_ICONS_DATA,
  PH_DATA,
  FOOD_ITEMS_DATA,
  TOY_ITEMS_DATA,
  HOUSING_ITEMS_DATA,
}) {
  const router = useRouter();

  const HEADING_TEXT = HeadingElement("Care, Learn and Help", "your Hedgehog.");

  const TOP_OBJECT = {
    id: "indexTop",
    stylesSrc: index_styles,
    bg: INDEX_TOP_BG,
    topText: "All Things Hedgie.",
    heading: HEADING_TEXT,
    text: "We provide products such as food, toys and housing for your hedgehog. You can also learn the different types of hedgehog too.",
    links: [
      { linkID: "L_1", linkName: "Browse Products", linkRoute: "/store" },
      { linkID: "L_2", linkName: "Learn The Types", linkRoute: "/types" },
    ],
    dividerType: "slanted",
  };

  const STORE_IMG_ICON_OBJECT = {
    id: "indexStoreImgAndIcon",
    stylesSrc: index_styles,
    imgSrc: INDEX_STORE_BG,
    iconSrc: HEDGEHOG_7,
  };

  const INFO_IMG_ICON_OBJECT = {
    id: "indexInfoImgAndIcon",
    stylesSrc: index_styles,
    imgSrc: INDEX_INFO_BG,
    iconSrc: HEDGEHOG_5,
  };

  const mobileNavHolderRef = useRef(null);
  const [IS_MOBILE_NAV_HOLDER_VISIBLE, SET_IS_MOBILE_NAV_HOLDER_VISIBLE] =
    useState(true);

  // Detecting when the user clicks outside of the mobileNavHolder and closes it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        mobileNavHolderRef.current &&
        !mobileNavHolderRef.current.contains(e.target)
      ) {
        document.getElementById("mobileNavLinks").style.display = "none";
        document.getElementById("toggler").style.display = "block";
        document.getElementById("closer").style.display = "none";
        document.getElementById("togglerCloserCB").checked = false;
        document.getElementById("mobileProductsCB").checked = false;
        document.getElementById("mobileTypesCB").checked = false;
        document
          .getElementById("typesCBHolder")
          .classList.remove("toggle-dropdown");
        document
          .getElementById("productsCBHolder")
          .classList.remove("toggle-dropdown");
        document.getElementById("mobileNavTypesLinks").style.height = 0;
        document.getElementById("mobileNavProductsLinks").style.height = 0;
        document.getElementById("mobileNavLinks").style.height = 0;
        document.getElementById("mobileNavLinksOverlay").style.display = "none";
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [mobileNavHolderRef]);

  // This is used to close the mobile nav links when the user scrolls passed the mobileNavHolder
  const handleMobileNavHolderNotVisible = (isElementVisible) => {
    if (!isElementVisible && IS_MOBILE_NAV_HOLDER_VISIBLE) {
      document.getElementById("togglerCloserCB").checked = false;

      document.getElementById("mobileProductsCB").checked = false;
      document.getElementById("mobileTypesCB").checked = false;
      document.getElementById("mobileNavTypesLinks").style.height = 0;
      document.getElementById("mobileNavProductsLinks").style.height = 0;
      document.getElementById("mobileNavLinks").style.height = "0";
      document
        .getElementById("typesCBHolder")
        .classList.remove("toggle-dropdown");
      document
        .getElementById("productsCBHolder")
        .classList.remove("toggle-dropdown");

      document.getElementById("closer").style.display = "none";
      document.getElementById("toggler").style.display = "block";

      document.getElementById("mobileNavLinks").style.display = "none";

      document.getElementById("mobileNavLinksOverlay").style.display = "none";
    }
  };

  // Detecting when the user scrolls passed the mobileNavHolder and will close it if it is open
  useEffect(() => {
    const checkMobileNavHolderVisibility = () => {
      if (mobileNavHolderRef.current) {
        const mobileNavHolderRect =
          mobileNavHolderRef.current.getBoundingClientRect();
        const isElementVisible =
          mobileNavHolderRect.top < window.innerHeight &&
          mobileNavHolderRect.bottom >= 0;

        handleMobileNavHolderNotVisible(isElementVisible);

        SET_IS_MOBILE_NAV_HOLDER_VISIBLE(isElementVisible);
      }
    };

    // Adding the scroll event listener
    window.addEventListener("scroll", checkMobileNavHolderVisibility);

    // Checking when page loads
    checkMobileNavHolderVisibility();

    // Clean up
    return () => {
      window.removeEventListener("scroll", checkMobileNavHolderVisibility);
    };
  }, []);

  useEffect(() => {
    // DeclareStorageVariable("local", "Item Name: Toy 1", "Toy 1");
    // DeclareStorageVariable("local", "Toy 1 Quantity", 2);
    // DeclareStorageVariable("local", "Item Name: Food 1", "Food 1");
    // DeclareStorageVariable("local", "Food 1 Quantity", 1);

    setTimeout(() => {
      // Getting the cart items
      SaveCartItems(FOOD_ITEMS_DATA, TOY_ITEMS_DATA, HOUSING_ITEMS_DATA);
    }, 500);
  }, []);

  return (
    <div id="PAGE" className="page half-second">
      <PageHead page_head_data={PH_DATA} icons_data={PH_ICONS_DATA} />

      <PageFade>
        <DesktopNav />
        <div id="mobileNavHolder" ref={mobileNavHolderRef}>
          <MobileNav />
          <MobileNavLinks />
        </div>
      </PageFade>

      <div id="PAGE_CNT">
        <div
          id="mobileNavLinksOverlay"
          className={`${styles.mobile_nav_links_overlay}`}
        />

        <PageFade>
          <Top object={TOP_OBJECT} />
        </PageFade>

        <section id="indexStore" className={`${index_styles.index_store}`}>
          <div className={`${index_styles.index_store_inner}`}>
            <div
              className={`${index_styles.index_store_inner_box} container-fluid`}
            >
              <div className={`${index_styles.index_store_inner_row} row`}>
                <div
                  className={`${index_styles.index_store_inner_side} ${index_styles.index_store_L} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
                >
                  <div className={`${index_styles.index_store_inner_side_cnt}`}>
                    <ImageWithIcon object={STORE_IMG_ICON_OBJECT} />
                  </div>
                </div>

                <div
                  className={`${index_styles.index_store_inner_side} ${index_styles.index_store_R} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
                >
                  <div
                    className={`${index_styles.index_store_inner_side_cnt}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="indexInfo" className={`${index_styles.index_info}`}>
          <div className={`${index_styles.index_info_inner}`}>
            <div
              className={`${index_styles.index_info_inner_box} container-fluid`}
            >
              <div className={`${index_styles.index_info_inner_row} row`}>
                <div
                  className={`${index_styles.index_info_inner_side} ${index_styles.index_info_L} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
                >
                  <div className={`${index_styles.index_info_inner_side_cnt}`}>
                    <ImageWithIcon object={INFO_IMG_ICON_OBJECT} />
                  </div>
                </div>

                <div
                  className={`${index_styles.index_info_inner_side} ${index_styles.index_info_R} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
                >
                  <div
                    className={`${index_styles.index_info_inner_side_cnt}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
