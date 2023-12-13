// React/Next Imports
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import SaveCartItems from "@/assets/functions/data/cart/SaveCartItems";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavLinks } from "@/assets/components/global/Nav/Mobile/MobileNavLinks";

// Style Imports
import styles from "../assets/styles/modules/Nav/Nav.module.css";
import "../assets/styles/modules/Info/Info.module.css";

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
    "PH_Info.json"
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

export default function Info({
  PH_ICONS_DATA,
  PH_DATA,
  FOOD_ITEMS_DATA,
  TOY_ITEMS_DATA,
  HOUSING_ITEMS_DATA,
}) {
  const router = useRouter();
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

      <DesktopNav />
      <div id="mobileNavHolder" ref={mobileNavHolderRef}>
        <MobileNav />
        <MobileNavLinks />
      </div>

      <div id="PAGE_CNT">
        <div
          id="mobileNavLinksOverlay"
          className={`${styles.mobile_nav_links_overlay}`}
        />
      </div>
    </div>
  );
}
