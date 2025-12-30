import { pool } from "../config/db.config.js";

export const selectAllTargets = async () => {
  const query = `
    SELECT * FROM targets;
  `;

  const { rows } = await pool.query(query);

  return rows;
}

export const insertTarget = async (data) => {
  const {
    name,
    url,
    enabled,
    check_interval_sec,
    expected_status
  } = data;

  const query = `
    INSERT INTO targets (
      name,
      url,
      enabled,
      check_interval_sec,
      expected_status
    )
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [
    name,
    url,
    enabled,
    check_interval_sec,
    expected_status
  ];

  const { rows } = await pool.query(query, values);
  return rows[0];
};
