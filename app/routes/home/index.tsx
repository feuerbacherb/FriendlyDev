import type { Route } from "./+types/index";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "The Friendly Dev | Welcome" }, { name: "description", content: "Custom Website Development" }];
}

export default function Home() {
  useEffect(() => {
    console.log(window.scrollX);
  }, []);

  return <>Homepage</>;
}
