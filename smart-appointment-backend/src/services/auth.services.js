import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { db } from "../config/db.js";

export async function registerUser({ name, email, password }) {

  const [existing] = await db.query(
    "SELECT id FROM users WHERE email = ?",
    [email]
  );

  if (existing.length > 0) {
    throw new Error("User already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const userId = uuidv4();

  await db.query(
    `INSERT INTO users (id, name, email, password_hash, role)
     VALUES (?, ?, ?, ?, ?)`,
    [userId, name, email, passwordHash, "USER"]
  );

  return { userId };
}

export async function loginUser({ email, password }) {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (rows.length === 0) {
    throw new Error("Invalid credentials");
  }

  const user = rows[0];

  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return { token };
}
