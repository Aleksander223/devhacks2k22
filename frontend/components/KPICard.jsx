import RadialProgress from "./RadialProgress";

export default function KPICard({ percent, text, title }) {
  return (
    <>
      <div className="card xl:card-side bg-base-100 shadow-md max-h-52 xl:max-h-32 border-base-200 border-2 w-full">
        <RadialProgress percent={percent}/>
        <div className="p-4 xl:card-body">
          <p className="font-bold text-primary text-center xl:text-left">{title}</p>
          <p className="text-gray-400 text-center xl:text-left">{text}</p>
        </div>
      </div>
    </>
  );
}