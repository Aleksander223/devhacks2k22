import { RiLeafLine } from "react-icons/ri";
import { TbTemperature } from "react-icons/tb"

const restaurant = {
    name: "Pizza Italia",
    carbon: 203,
    vegan: true,
    level: 3,
    img: "https://api.lorem.space/image/pizza?w=400&h=225"
}

const offers = [
    {
        name: "pizza test",
        oldPrice: 25,
        newPrice: 10,
        cost: 100
    }
]

export default function RestaurantProfile() {
    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="col-span-1 text-center flex flex-row">
                <div className="card bg-base-100 shadow-md border-base-200 border-2 w-full lg:w-2/3 p-4 mx-auto">
                    <figure><img src={restaurant.img} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title mx-auto text-primary">{restaurant.name}</h2>
                        <div className="flex flex-col md:flex-row gap-4 content-evenly">
                            <div className="mt-4 card shadow-md p-4 md:p-8 mx-auto w-full md:w-80">
                                <div>
                                    <div className="btn btn-sm btn-circle btn-outline border-success border-2"><TbTemperature className="text-success font-black text-xl" /></div>
                                    <p className="inline ml-4 text-lg">Carbon footprint <span className="text-accent font-semibold">{restaurant.carbon}</span></p>
                                </div>
                            </div>
                            {restaurant.vegan && <div className="mt-4 card shadow-md p-4 md:p-8 mx-auto w-full md:w-80">
                                <div>
                                    <div className="btn btn-sm btn-circle btn-outline border-success border-2"><RiLeafLine className="text-success font-black" /></div>
                                    <p className="inline ml-4 text-lg">Vegan <span className="text-accent font-semibold">friendly</span></p>
                                </div>
                            </div>}
                            <div className="mt-4 card shadow-md p-4 md:p-8 mx-auto w-full md:w-80">
                                <div>
                                    <p className="inline ml-4 text-lg"><span className="text-accent font-semibold">Level {restaurant.level}</span> involvedness</p>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-md border-base-200 border-2 w-full p-4 mx-auto mt-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                {offers.map(offer => {
                                    return (
                                        <div className="mt-4 card shadow-md p-4 md:p-8 mx-auto w-full md:w-80">
                                            <div>
                                                <p className="inline ml-4 text-xl text-secondary">{offer.name}</p>
                                                <p className="text-accent text-lg mt-1"><span className="line-through decoration-2 text-base-content mr-1">{offer.oldPrice} RON</span>{offer.newPrice} RON</p>
                                                <p className="inline ml-4 text-md mt-1"><span className="text-accent">{offer.cost}</span> community points</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}