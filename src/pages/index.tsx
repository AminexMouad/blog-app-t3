import React from "react";
import { IoMenuOutline, IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-300 bg-white">
        <div>
          <IoMenuOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-thin ">Learning blog App</div>
        <div className="flex items-center space-x-4">
          <div>
            <IoNotificationsOutline className="text-2xl  text-gray-600" />
          </div>
          <div className="h-5 w-5 rounded-full bg-gray-600" />
          <div>
            <button className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900">
              <div>Write</div>
              <div>
                <AiOutlineEdit />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid h-full w-full grid-cols-12 place-items-center">
        <main className="col-span-8 h-full w-full border-r border-gray-300">
          <div className="flex w-full flex-col items-center space-y-4 px-12 py-10">
            <div className="flex w-full items-center space-x-4">
              <label
                htmlFor="search"
                className="p-y- flex w-full items-center rounded-xl border border-gray-800 px-3 py-2"
              >
                <CiSearch />
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="ml-1 outline-none"
                  placeholder="Search for articles"
                />
              </label>

              <div className="flex w-full items-center justify-end space-x-4">
                <div>My topics:</div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="rounded-3xl bg-gray-300/50 px-3 py-2"
                    >
                      Topic {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between  border-b border-gray-300 pb-8">
              <div>Articles</div>
              <div>
                <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-3 py-1.5 font-semibold hover:bg-gray-100/50">
                  <div>Following</div>
                  <HiChevronDown className="text-xl" />
                </button>
              </div>
            </div>
          </div>

          <div></div>
        </main>
        <aside className="col-span-4  h-full w-full">
          This is used for sidebar
        </aside>
      </section>
    </div>
  );
};

export default HomePage;
