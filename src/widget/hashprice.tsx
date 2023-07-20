import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card";
import { cn } from "../utils";

export default function HashpriceWidget() {
  const [dark, setDark] = useState(false);

  return (
    <Card className={cn(dark && "bg-black")}>
      <CardHeader className="flex justify-between flex-row items-center">
        <CardTitle className={cn(dark && "text-white")}>
          Widget Hashprice
        </CardTitle>
        <button className="inline-block" onClick={() => setDark(!dark)}>
          Dark
        </button>
      </CardHeader>
      <CardContent className={cn(dark && "text-white")}>
        <p>This is my Hashprice widget only for testing purpose</p>
      </CardContent>
      <CardFooter className={cn(dark && "text-white")}>
        <p>Footer</p>
      </CardFooter>
    </Card>
  );
}
