POST /api/auth/register
POST /api/auth/login

POST /api/appointments
GET  /api/appointments

GET  /api/admin/analytics


POST /api/appointments

Request:
{
  "date": "2026-01-05",
  "time": "10:30",
  "reason": "General Checkup"
}

Response:
{
  "appointmentId": "uuid",
  "status": "CONFIRMED"
}
