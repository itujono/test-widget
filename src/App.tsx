import HashpriceWidget from "./widget/hashprice";
import KPIWidget from "./widget/kpi";
import NetworkHashrateWidget from "./widget/network-hashrate";

function App() {
  return (
    <main className="grid grid-cols-3 gap-4">
      <KPIWidget />
      <HashpriceWidget />
      <NetworkHashrateWidget />
    </main>
  );
}

export default App;
