import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HashpriceWidget from "./widget/hashprice";
import KPIWidget from "./widget/kpi";
import NetworkHashrateWidget from "./widget/network-hashrate";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <main className="grid grid-cols-3 gap-4 text-clip">
        <KPIWidget />
        <HashpriceWidget />
        <NetworkHashrateWidget />
      </main>
    </QueryClientProvider>
  );
}

export default App;
