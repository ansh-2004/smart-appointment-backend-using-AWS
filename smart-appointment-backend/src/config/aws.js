import dotenv from "dotenv"
dotenv.config();
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const dynamoClient = new DynamoDBClient({
  region: process.env.AWS_REGION,
});
