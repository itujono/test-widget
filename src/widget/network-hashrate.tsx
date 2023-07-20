import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card";

export default function NetworkHashrateWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Widget Network Hashrate</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is my Network Hashrate widget only for testing purpose</p>
      </CardContent>
      <CardFooter>
        <p>Footer</p>
      </CardFooter>
    </Card>
  );
}
