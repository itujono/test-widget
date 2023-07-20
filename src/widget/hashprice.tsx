import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card";

export default function HashpriceWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Widget Hashprice</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is my Hashprice widget only for testing purpose</p>
      </CardContent>
      <CardFooter>
        <p>Footer</p>
      </CardFooter>
    </Card>
  );
}
