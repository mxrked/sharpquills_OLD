// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";

// Library Imports

// Data/Functions/Images Imports
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import SaveCartItems from "@/assets/functions/data/cart/SaveCartItems";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../assets/styles/modules/Store/Store.module.css";

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
    "PH_Store.json"
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

export default function Store({
  PH_ICONS_DATA,
  PH_DATA,
  FOOD_ITEMS_DATA,
  TOY_ITEMS_DATA,
  HOUSING_ITEMS_DATA,
}) {
  const router = useRouter();

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

      <div id="PAGE_CNT"></div>
    </div>
  );
}
