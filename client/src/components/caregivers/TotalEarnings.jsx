import React from "react";
import { Wallet } from "lucide-react";
import StatCard from "../dashboard/StatCard";

export default function TotalEarnings({ value = "Rp.0" }) {
  return (
    <StatCard
      title="Total Pendapatan"
      value={value}
      icon={Wallet}
      iconColor="text-green-400"
    />
  );
}
