import AppCard from "../components/AppCard";
import KPICard from "../components/KPICard";

export default function Home() {
  return (
    <>
     <div className="grid grid-flow-row md:grid-flow-col gap-4">
        <div className="col-span-1 md:col-span-2 bg-primary flex flex-col md:flex-row">
          <KPICard title="Lorem KPI" text="Tracks how often you use lorem" percent={73}/>
          <AppCard/>
        </div>
        <div className="col-span-1 bg-secondary"><AppCard/></div>
     </div>
    </>
  )
}
