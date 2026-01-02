import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "smart-appointment-users-db.ca1c2qyqc695.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "anshgupta9498",
  database: "smart_appointments",
});
