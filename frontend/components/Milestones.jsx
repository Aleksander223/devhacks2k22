

const Milestones = ({percent, text, title}) => {
    return(
        <>
        <div className="card xl:card-side bg-base-100 shadow-md max-h-52 xl:max-h-32 border-base-200 border-2">
        <progress className="progress progress-primary mx-auto mt-4 xl:mt-5 xl:mx-3 text-primary h-4" value= {percent} max="100"></progress>
        <div className="p-4 xl:card-body">
          <p className="font-bold text-primary text-center xl:text-left">{title}</p>
          <p className="text-gray-400 text-center xl:text-left">{text}</p>
        </div>
      </div>
        
        </>
    );
}

export default Milestones;