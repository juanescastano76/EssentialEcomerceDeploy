import supabase from "../../../config/supabaseClient";
export const fetchSingleProduct: any = async (productId: number) => {
  let { data: producto, error } = await supabase
    // .from("products")
    // .select("*")
    // .limit(productId);
    .from("products")
    .select("*")
    .eq("id", productId);
  if (error) {
    return error;
  }

  return producto;
};
