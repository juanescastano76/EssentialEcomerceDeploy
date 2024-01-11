import { ProductType } from "@/types";
import supabase from "../../../config/supabaseClient";
import { data } from "autoprefixer";
export const fetchSupabase: any = async () => {
  let { data: productos, error } = await supabase
    .from("products")
    .select("*")
    .range(0, 9);
  if (error) {
    return error;
  }
  console.log(productos);

  // let { data: products, error } = await supabase.from("products").select("");
  // console.log(products);

  //   let data = await supabase.from("products").select("*").range(0, 9);
  //   console.log(data);
  return productos;
};
