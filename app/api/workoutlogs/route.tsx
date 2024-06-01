import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/dbConnect";
import WorkoutLog from "@/models/WorkoutLog";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  const { userId } = getAuth(request);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { exerciseList } = await request.json();
  await connectMongoDB();
  await WorkoutLog.create({ userId, exerciseList });
  return NextResponse.json(
    { message: "Workout Log created!" },
    { status: 201 },
  );
}

export async function GET(request: NextRequest) {
  const { userId } = getAuth(request);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectMongoDB();
  const workoutLogs = await WorkoutLog.find({ userId }).lean();
  return NextResponse.json({ workoutLogs });
}
