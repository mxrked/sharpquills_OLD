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

// Style Imports
import "../assets/styles/modules/Contact/Contact.module.css";

export async function getServerSideProps() {
  const STORE_DATA_DIRECTORY = "public/data/Store_Data/";
  const UTF8 = "utf-8";

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

  const FOOD_ITEMS_DATA_FC = fs.readFileSync(FOOD_ITEMS_DATA_FP, UTF8);
  const TOY_ITEMS_DATA_FC = fs.readFileSync(TOY_ITEMS_DATA_FP, UTF8);
  const HOUSING_ITEMS_DATA_FC = fs.readFileSync(HOUSING_ITEMS_DATA_FP, UTF8);

  let FOOD_ITEMS_DATA = undefined;
  let TOY_ITEMS_DATA = undefined;
  let HOUSING_ITEMS_DATA = undefined;

  try {
    FOOD_ITEMS_DATA = JSON.parse(FOOD_ITEMS_DATA_FC);
    TOY_ITEMS_DATA = JSON.parse(TOY_ITEMS_DATA_FC);
    HOUSING_ITEMS_DATA = JSON.parse(HOUSING_ITEMS_DATA_FC);

    return {
      props: {
        FOOD_ITEMS_DATA,
        TOY_ITEMS_DATA,
        HOUSING_ITEMS_DATA,
      },
    };
  } catch (error) {
    console.error("Error while fetching data: " + error);

    return {
      props: {
        FOOD_ITEMS_DATA: null,
        TOY_ITEMS_DATA: null,
        HOUSING_ITEMS_DATA: null,
      },
    };
  }
}

export default function Contact({
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
      <div id="PAGE_CNT"></div>
    </div>
  );
}
