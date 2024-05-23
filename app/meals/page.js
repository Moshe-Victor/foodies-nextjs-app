import Link from "next/link";
import MealGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import {getMeals} from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";
import {Suspense} from "react";

export const metadata = {
    title: 'All Meals',
    description: 'Browse the delicious meals shared by our vibrant community.',
};

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals={meals}/>;
}

export default function MealsPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p className={classes.cta}>

                    Choose your favourite recipe and cook it yourself. It is easy and fun.
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your Favourite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                <Meals/>
                </Suspense>
            </main>
        </>
    )
}