import AppCard from "../components/AppCard";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home() {
  return (
    <>
     <div className="grid grid-flow-row md:grid-flow-col gap-4">
        <div className="col-span-1 md:col-span-2 bg-primary flex flex-col md:flex-row">
          <AppCard/>
          <AppCard/>
        </div>
        <div className="col-span-1 bg-secondary"><AppCard/></div>
     </div>
    </>
  )
}
