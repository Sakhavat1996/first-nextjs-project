import { getMeal } from "@/lib/meals";
import { Suspense } from "react";
import Meal from "@/components/meal/meal";
import classes from '../loading.module.css'
import { notFound } from "next/navigation";

async function GetMealComponent({slug}){
  const meal = await getMeal(slug);
  if(!meal){
    notFound()
  }
  return <Meal meal={meal}/>
}

export default async function MealSlug({ params }) {
  console.log(params.slug)
  return (
    <>
    <p>aosidnfsidnfisndf</p>
    <Suspense fallback={<p className= {classes.loading}>Loading...</p>}>
        <GetMealComponent slug={params.slug}/>
      </Suspense>
    </>
  );
}
