import supabase from "./supabase";
import { supabaseUrl } from "./supabase";
// A fucntion to get cabins

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins/public/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  console.log(imagePath);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  //2. Upload Image
  console.log(newCabin.image);
  // const avatarFile = event.target.files[0];
  const { error: storageError } = await supabase.storage
    .from("cabins")
    .upload(`public/${imageName}`, newCabin.image);

  //3. Delete cabin if Image uplaod was uncessesfull
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error("cabin image could not uploaded Cabin was not created ");
  }

  return data;
}

export async function getCabins() {
  try {
    const { data, error } = await supabase.from("cabins").select("*");

    return data;
  } catch (error) {
    throw new Error("Cabins could not be loaded");
  }
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}
