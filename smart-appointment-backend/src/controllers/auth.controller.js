import { registerUser, loginUser } from "../services/auth.services.js";

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const result = await registerUser({ name, email, password });
    res.status(201).json({ message: "User registered", ...result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const result = await loginUser({ email, password });
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}
