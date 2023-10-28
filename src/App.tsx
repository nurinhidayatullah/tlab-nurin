import { useEffect, useMemo, useState } from "react";
import brandLogo from "./assets/brand_logo.svg";
import youtubeLogo from "./assets/logo-youtube.svg";
import whatsappLogo from "./assets/logo-whatsapp.svg";
import twitterLogo from "./assets/logo-twitter.svg";
import instagramLogo from "./assets/logo-instagram.svg";
import gambar from "./assets/gambar.png";
import axios from "axios";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [games, setGames] = useState([]);
  const [filters, setFilters] = useState(["MMORPG, ARPG, Shooter "]);
  const [selectedFilter, setSelectedFilter] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getData = () => {
    axios
      .get(" https://free-to-play-games-database.p.rapidapi.com/api/games", {
        headers: {
          "X-RapidAPI-Key":
            "6ca948ceb7msh426f11ced47c1b7p13741cjsnf6f65942f5df",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then((data) => {
        setGames(data.data);
      });
  };

  const setFilterItem = (filter) => {
    setSelectedFilter(filter);
  };

  const gamesData = useMemo(() => {
    if (selectedFilter == "") {
      return games;
    } else {
      return games.filter((a) => a.genre == selectedFilter);
    }
  }, [getData, selectedFilter]);

  useEffect(() => {
    setSelectedFilter("");
    getData();
  }, []);
  return (
    <>
      <div className="bg-[#EDF1F3] pb-48">
        <div className="container mx-auto">
          {/*HEADER*/}
          <nav class="bg-white-800">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button
                    type="button"
                    class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    <svg
                      class="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                    <svg
                      class="hidden h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div class="flex flex-shrink-0 items-center">
                    <img
                      class="h-8 w-auto"
                      src={brandLogo}
                      alt="Your Company"
                    />
                  </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
                  <div class="flex flex-shrink-0 items-center">
                    <img
                      class="h-5 w-auto"
                      src={youtubeLogo}
                      alt="Your Company"
                    />
                  </div>
                  <div class="flex flex-shrink-0 items-center">
                    <img
                      class="h-5 w-auto"
                      src={whatsappLogo}
                      alt="Your Company"
                    />
                  </div>
                  <div class="flex flex-shrink-0 items-center">
                    <img
                      class="h-5 w-auto"
                      src={twitterLogo}
                      alt="Your Company"
                    />
                  </div>
                  <div class="flex flex-shrink-0 items-center">
                    <img
                      class="h-5 w-auto"
                      src={instagramLogo}
                      alt="Your Company"
                    />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="relative">
          <div className="main-background-image">
            <div className="container w-2/5 h-screen-80 text-center mx-auto text-white">
              <div className="flex flex-col justify-center items-center h-full gap-y-6">
                <h1 className="text-4xl text-center">
                  Pilih Game Favorite Kalian
                </h1>
                <p className="">
                  Shortbread cookie tootsie roll sugar plum cheesecake pudding
                  croissant apple pie. Lollipop macaroon lollipop croissant
                  chocolate cake croissant fruitcake brownie jelly-o.
                </p>
                <button class="bg-blue-500 hover:bg-blue-700 px-5 py-2.5 text-white font-bold py-2 px-4 rounded">
                  Sign Up For Free Account
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-between items-center my-12">
            <p className="text-gray-700 text-2xl">Game Terbaru</p>
            <div class="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  Semua Genre
                  <svg
                    class="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {dropdownOpen && (
                <div
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  {filters.map((item) => (
                    <div>
                      <button
                        //role="button"
                        onClick={() => setFilterItem(item)}
                        class="text-gray-700 block px-4 py-2 text-sm w-full"
                      >
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {gamesData.map((item) => (
              <div className="w-full bg-white rounded">
                <div className="relative flex flex-col">
                  <img className="p-2.5" src={item.thumbnail} alt="" />
                  <span className="bg-blue-300 rounded-full absolute bottom-4 left-4 text-white px-4">
                    {item.genre}
                  </span>
                </div>
                <div className="p-2.5">
                  <p className="text-2xl">{item.title}</p>
                  <p className="my-3">{item.short_description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-gray-400">Platform</p>
                      <p>{item.platform}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Release Date</p>
                      <p>{item.release_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
