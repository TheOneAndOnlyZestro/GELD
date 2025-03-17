"use client";
import { useInterval } from "interval-hooks";
import React from "react";

const Refresh = ({ refreshFunc }: { refreshFunc: () => Promise<any> }) => {
  useInterval(refreshFunc, 500);
  return null;
};

export default Refresh;
