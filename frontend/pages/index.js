import ChartCard from "../components/ChartCard";
import { FiHeart, FiCoffee, FiShare2 } from "react-icons/fi";
import { FaRecycle, FaRunning } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

const restaurants = [
  {
    id: 1,
    name: "Shaormeria Baneasa",
    img: "https://placeimg.com/400/225/arch"
  },
  {
    id: 2,
    name: "Furgoneta",
    img: "https://placeimg.com/400/225/arch"
  }
]

const events = [
  {
    id: 1,
    name: "Test",
    location: "Locatia A",
    date: "22.10.2022"
  },
  {
    id: 2,
    name: "Test 2",
    location: "Locatia B",
    date: "23.10.2022"
  }
]

const smallEvents = [
  {
    id: 1,
    name: "test",
    location: "Locatia X",
    date: "22.10.2022"
  },
  {
    id: 2,
    name: "testing",
    location: "Locatia Y",
    date: "23.10.2022"
  }
]

const feed = [
  "X a facut y",
  "bbbbbbbbbbbbbbbbbbbb",
  "Lorem",
  "aaaaaaaaaaaaaaa"
]

export default function Home() {
  const [tab, setTab] = useState(1);

  const showRestaurantModal = (restaurant) => {
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2 text-center flex">
          <ChartCard />
        </div>
        <div className="col-span-1 flex flex-col md:flex-row">
          <div className="card bg-base-100 shadow-md border-base-200 border-2 w-full">
            <div className="card-body w-full">
              <h2 className="card-title mx-auto text-primary">Community milestones</h2>
              <div className="divider"></div>
              <div className="mb-2">
                <div className="btn btn-sm btn-circle btn-outline border-accent border-2"><FaRecycle className="text-accent font-black" /></div>
                <p className="inline ml-4 text-lg">Recicleaza <span className="text-accent font-semibold">100kg</span></p>
              </div>
              <div className="mb-2">
                <div className="btn btn-sm btn-circle btn-outline border-accent border-2"><FaRunning className="text-accent font-black" /></div>
                <p className="inline ml-4 text-lg">Alearga <span className="text-accent font-semibold">100km</span></p>
              </div>

            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col md:flex-row">
          <div className="card bg-base-100 shadow-md border-base-200 border-2 w-full">
            <div className="card-body w-full">
              <div className="card-title mx-left p-0 m-0">
                <div className="tabs">
                  <a onClick={() => setTab(1)} className={`tab tab-bordered ${tab === 1 ? "tab-active" : ""}`}><FiHeart className="mr-2" /> Events</a>
                  <a onClick={() => setTab(2)} className={`tab tab-bordered ${tab === 2 ? "tab-active" : ""}`}><FiCoffee className="mr-2" /> Small events</a>
                  <a onClick={() => setTab(3)} className={`tab tab-bordered ${tab === 3 ? "tab-active" : ""}`}><FiShare2 className="mr-2" />Partners</a>
                </div>
              </div>
              {tab === 1 && <div className="flex flex-col md:flex-row gap-4 content-evenly">
                {
                  events.map(event => {
                    return (
                      <div className="mt-4 card shadow-md p-4 md:p-8">

                        <div className="mx-auto text-center">
                          <p className="text-2xl text-primary mb-3">{event.name}</p>
                          <div className="badge badge-primary p-4 text-lg font-semibold">{event.location}</div>
                          <p className="inline ml-4 text-lg">{event.date}</p>
                          <Link href={`/event/${event.id}`}><button className="btn btn-secondary mt-3 btn-sm btn-wide text-secondary-content">View</button></Link>
                        </div>
                      </div>
                    );
                  })
                }
              </div>}
              {tab === 2 && <div className="flex flex-col md:flex-row gap-4 content-evenly">
                {
                  smallEvents.map(event => {
                    return (
                      <div className="mt-4 card shadow-md p-4 md:p-8">

                        <div className="mx-auto text-center">
                          <p className="text-2xl text-primary mb-3">{event.name}</p>
                          <div className="badge badge-primary p-4 text-lg font-semibold">{event.location}</div>
                          <p className="inline ml-4 text-lg">{event.date}</p>
                          <Link href={`/event/${event.id}`}><button className="btn btn-secondary mt-3 btn-sm btn-wide text-secondary-content">View</button></Link>
                        </div>
                      </div>
                    );
                  })
                }
              </div>}
              {tab === 3 && <div className="flex flex-col md:flex-row gap-4 content-evenly">
                {restaurants.map((restaurant) => {
                  return (
                    <div className="mt-4 card shadow-md p-4 md:p-8">
                      <div className="mx-auto text-center">
                        <p className="text-lg text-semibold text-primary">{restaurant.name}</p>
                        <figure className="mt-4"><img src={restaurant.img} alt="car!" /></figure>
                        <Link href={`/restaurant/${restaurant.id}`}><button className="btn btn-secondary mt-3 btn-sm btn-wide text-secondary-content">View</button></Link>
                      </div>
                    </div>
                  );
                })}
              </div>}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col md:flex-row">
          <div className="card bg-base-100 shadow-md border-base-200 border-2 w-full">
            <div className="card-body w-full">
              <h2 className="card-title mx-auto text-primary">Feed</h2>
              <div className="divider"></div>
              <ul className="steps steps-vertical">
                {
                  feed.map(notification => {
                    return <li data-content="★" className="step step-neutral">{notification}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
