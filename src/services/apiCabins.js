import supabase from "./supabase";

// A fucntion to get cabins

export async function getCabins() {
  try {
    const { data, error } = await supabase.from("cabins").select("*");

    return data;
  } catch (error) {
    throw new Error("Cabins could not be loaded");
  }
}
