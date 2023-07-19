import KPIWidget from "./widget/kpi";

function App({ symbol }: { symbol: string }) {
  return (
    <main>
      <span>{symbol}</span>
      <KPIWidget />
    </main>
  );
}

export default App;
