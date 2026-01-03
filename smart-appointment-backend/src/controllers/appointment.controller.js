import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddb } from "../config/aws.js";

const TABLE = "Appointments";

export const bookAppointment = async (req, res) => {
  const { appointment_datetime, doctor, notes } = req.body;

  const item = {
    user_id: req.user.id,
    appointment_datetime,
    doctor,
    notes,
    status: "BOOKED",
    createdAt: new Date().toISOString()
  };

  await ddb.send(new PutCommand({
    TableName: TABLE,
    Item: item
  }));

  res.status(201).json({ message: "Appointment booked", item });
};

export const getMyAppointments = async (req, res) => {
  const data = await ddb.send(new QueryCommand({
    TableName: TABLE,
    KeyConditionExpression: "userId = :u",
    ExpressionAttributeValues: {
      ":u": req.user.id
    }
  }));

  res.json(data.Items);
};
