import React from "react";
import Card from "../components/Card";

export default function Projects() {
  return (
    <article className="flex flex-col gap-6 max-w-screen-sm pr-24">
      <h2 className="text-base font-semibold">Projects</h2>

      <div className=" grid grid-cols-2 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </article>
  );
}
