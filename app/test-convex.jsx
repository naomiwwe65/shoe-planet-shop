"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export default function TestConvex() {
  console.log("API object:", api);
  console.log("API orders:", api.orders);
  console.log("API users:", api.users);

  return (
    <div className="p-8">
      <h1>Convex API Test</h1>
      <pre>{JSON.stringify(api, null, 2)}</pre>
    </div>
  );
}
