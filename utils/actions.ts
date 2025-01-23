"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createCamp = async (prevState: unknown, formData: FormData) => {
  await new Promise((resolve) => {
    setInterval(resolve, 1000);
  });
  const rawData = Object.fromEntries(formData);
  console.log(rawData);
  revalidatePath("/camp");
  // redirect("/");
  return "Create Camp Success";
};

export const fetchCamp = async () => {
  const camps = [
    { id: 1, title: "Korat" },
    { id: 2, title: "Saraburi" },
    { id: 3, title: "ChiangMai" },
  ];
  return camps;
};
