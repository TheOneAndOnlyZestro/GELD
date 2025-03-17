import { Pool } from "pg";
const pool: Pool = new Pool({ connectionString: process.env.DATABASE_URL });

export interface item {
  id?: number;
  name: string;
  category: string;
  price: number;
  store: string;
  date: string;
}
export const query = async (text: string): Promise<item[]> => {
  try {
    const results = await pool.query(text);
    return results.rows;
  } catch (err) {
    throw err;
  }
};

export const getCount = async (): Promise<number> => {
  try {
    const results = await pool.query("SELECT COUNT(*) FROM items;");
    return results.rows[0];
  } catch (err) {
    throw err;
  }
};
