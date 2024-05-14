import { NextApiRequest, NextApiResponse } from "next";

let accessToken = "";
let refreshToken = "";

// Function to authenticate with WGER API and get tokens
const authenticateWithWger = async () => {
  const response = await fetch("https://wger.de/api/v2/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: process.env.WGER_USERNAME,
      password: process.env.WGER_PASSWORD,
    }),
  });

  const data = await response.json();
  accessToken = data.access;
  refreshToken = data.refresh;
};

// Function to refresh the access token
const refreshAccessToken = async () => {
  const response = await fetch("https://wger.de/api/v2/token/refresh/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: refreshToken }),
  });

  const data = await response.json();
  accessToken = data.access;
};

// Middleware to ensure access token is valid
const ensureAuthenticated = async () => {
  if (!accessToken) {
    await authenticateWithWger();
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await ensureAuthenticated();

    const response = await fetch("https://wger.de/api/v2/workout/", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch workout data");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching workout data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
