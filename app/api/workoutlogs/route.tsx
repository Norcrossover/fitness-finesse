import { NextRequest, NextResponse } from "next/server";
import { checkAuthentication } from "@/middleware";
import connectMongoDB from "@/lib/dbConnect";
import WorkoutLog from "@/models/WorkoutLog";

export async function POST(request: NextRequest) {
  const { isAuthenticated, userId } = checkAuthentication(request);
  if (!isAuthenticated || !userId) {
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
  const { isAuthenticated, userId } = checkAuthentication(request);
  if (!isAuthenticated || !userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectMongoDB();
  const workoutLogs = await WorkoutLog.find({ userId }).lean();
  return NextResponse.json({ workoutLogs });
}
