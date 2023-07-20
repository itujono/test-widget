import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card";
import { cn } from "../utils";

type BTCPrice = {
  data: {
    bitcoin: {
      usd: number;
    };
  };
};

export default function HashpriceWidget() {
  const [dark, setDark] = useState(false);

  const { data, isLoading } = useQuery<BTCPrice>({
    queryKey: ["btcPrice"],
    queryFn: () => {
      return axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
    },
  });

  const _btcPrice = data?.data.bitcoin.usd || 0;

  const btcPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(_btcPrice);

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
        {isLoading ? <p>Please wait...</p> : <p>BTC: {btcPrice}</p>}
      </CardContent>
      <CardFooter className={cn(dark && "text-white")}>
        <p>Footer</p>
      </CardFooter>
    </Card>
  );
}
