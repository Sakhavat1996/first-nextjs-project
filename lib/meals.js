import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  // throw new Error('Error happens')
  const rows = db.prepare("SELECT * FROM meals").all();
  return rows;
}

export async function getMeal(slug) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
