import PlacementContainer from "@/components/placementUserDashboard/PlacementContainer";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] p-5">
        <h2 className="text-3xl font-semibold ">Placement-cell Dashboard</h2>
        <PlacementContainer />
      </div>
    </div>
  );
}
