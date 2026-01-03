import { QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddb } from "../config/aws.js";

export const getAllAppointments = async (req, res) => {
  const data = await ddb.send(
    new QueryCommand({
      TableName: "Appointments",
      IndexName: "GSI_ALL_APPOINTMENTS",
      KeyConditionExpression: "entityType = :e",
      ExpressionAttributeValues: {
        ":e": "APPOINTMENT"
      }
    })
  );

  res.json(data.Items);
};
