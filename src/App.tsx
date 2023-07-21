import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HashpriceWidget from "./widget/hashprice";
import KPIWidget from "./widget/kpi";
import NetworkHashrateWidget from "./widget/network-hashrate";

const client = new QueryClient();

type WidgetType = "kpi" | "hashprice" | "network-hashrate";

function App({ widget }: { widget: WidgetType }) {
  return (
    <QueryClientProvider client={client}>
      {widget === "kpi" && <KPIWidget />}
      {widget === "hashprice" && <HashpriceWidget />}
      {widget === "network-hashrate" && <NetworkHashrateWidget />}
    </QueryClientProvider>
  );
}

export default App;
