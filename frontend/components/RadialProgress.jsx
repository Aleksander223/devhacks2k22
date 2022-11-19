const RadialProgress = ({percent}) => {
    return (
        <div className="radial-progress mx-auto mt-4 xl:mt-5 xl:mx-3 text-primary" style={{"--value": percent}}>{percent}%</div>
    );
};

export default RadialProgress;
