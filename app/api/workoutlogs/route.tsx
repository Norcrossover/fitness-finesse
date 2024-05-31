import connectMongoDB from "@/lib/dbConnect";
import WorkoutLog from "@/models/WorkoutLog";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(request: Request) {
  const { id, exerciseList } = await request.json();
  await connectMongoDB();
  await WorkoutLog.create({ id, exerciseList });
  return NextResponse.json(
    { message: "Workout Log created!" },
    { status: 201 },
  );
}

export async function GET() {
  await connectMongoDB();
  const workoutLogs = await WorkoutLog.find().lean();
  return NextResponse.json({ workoutLogs });
}
