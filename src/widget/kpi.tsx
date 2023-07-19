import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card";

export default function KPIWidget() {
  return (
    <Card id="widget-1">
      <CardHeader>
        <CardTitle>Widget KPI</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is my KPI widget only for testing purpose</p>
      </CardContent>
      <CardFooter>
        <p>Footer</p>
      </CardFooter>
    </Card>
  );
}
