User (RDS):
- id (UUID)
- name
- email
- password_hash
- role (USER / ADMIN)
- created_at

Appointment (DynamoDB):
- PK: user_id
- SK: appointment_datetime
- appointment_id
- status
- reason
