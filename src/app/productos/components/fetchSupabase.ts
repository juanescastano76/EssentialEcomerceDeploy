import { ProductType } from "@/types";
import supabase from "../../../config/supabaseClient";
export const fetchSupabase: any = async () => {
  let { data: productos, error } = await supabase.from("products").select("");
  if (error) {
    return error;
  }

  return productos;
};
