Frontend:
- React (later)
- Hosted on S3 + CloudFront

Backend:
- Node.js + Express
- Running on EC2
- Behind Application Load Balancer

Auth:
- JWT based authentication

Databases:
- RDS (MySQL) -> users
- DynamoDB -> appointments


Analytics:
- Logs stored in S3
- Athena queries
- QuickSight dashboards (Later)

Security:
- IAM Roles (no hardcoded keys)
- Security Groups
- Encrypted storage
