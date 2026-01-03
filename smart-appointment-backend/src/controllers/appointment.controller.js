import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { ddb } from "../config/aws.js";

const TABLE = "Appointments";

export const bookAppointment = async (req, res) => {
  const { appointment_datetime, doctor, notes } = req.body;
  console.log('in contorller req.user',req.user)
  const item = {
    user_id: req.user.userId,
    appointment_datetime,
    doctor,
    notes,
    status: "BOOKED",
    entityType: "APPOINTMENT", //  REQUIRED FOR ADMIN
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
    KeyConditionExpression: "user_id = :u",
    ExpressionAttributeValues: {
      ":u": req.user.userId
    }
  }));

  res.json(data.Items);
};
