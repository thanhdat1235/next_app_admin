import NewCustomerLayout from "@/components/layouts/NewCustomerLayout";
import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <>
      <section className="banner min-h-[490px] flex items-center px-4 lg:px-0">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="max-w-[897px] mx-auto text-5xl font-bold text-white w-full text-center">
            Finish Your Essay Today! EssayBot Suggests Best Contents and Helps
            You Write. No Plagiarism!
          </h1>
          <div className="flex w-full items-center">
            <input
              placeholder="Tell us your essay title or topic"
              className="my-16 w-[85%] min-h-[50px] rounded-l-md pl-4"
              type="text"
            />
            <div className="w-[15%] max-h-[50px]">
              <button className="bg-green-700 h-full w-full min-h-[50px] rounded-r-md text-white">
                Start Writing
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-16">
          <div className="max-w-[85%] mx-auto">
            <h3 className="text-2xl text-center mb-7 fonr-normal">
              Need a personal essay writer? Try EssayBot which is your
              professional essay typer.
            </h3>
            <h3 className="text-2xl font-bold text-center mb-7">
              How It Works
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-7">
              <div className="flex justify-center items-center flex-col">
                <div className="w-24 h-24 mb-5">
                  <img
                    className="rounded-full"
                    src="/img/home1_01.png"
                    alt=""
                  />
                </div>
                <h3 className="text-center text-xl font-bold">
                  Search a topic & begin drafting
                </h3>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-20 h-20">
                  <img
                    className="rounded-full"
                    src="/img/download.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div className="w-24 h-24 mb-5 flex justify-center items-center">
                  <img
                    className="rounded-full"
                    src="/img/home1_01.png"
                    alt=""
                  />
                </div>
                <h3 className="text-center text-xl font-bold">
                  Search a topic & begin drafting
                </h3>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-20 h-20">
                  <img
                    className="rounded-full"
                    src="/img/download.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div className="w-24 h-24 mb-5 flex justify-center items-center">
                  <img
                    className="rounded-full"
                    src="/img/home1_01.png"
                    alt=""
                  />
                </div>
                <h3 className="text-center text-xl font-bold">
                  Search a topic & begin drafting
                </h3>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-20 h-20">
                  <img
                    className="rounded-full"
                    src="/img/download.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center items-center flex-col">
                <div className="w-24 h-24 mb-5 flex justify-center items-center">
                  <img
                    className="rounded-full"
                    src="/img/home1_01.png"
                    alt=""
                  />
                </div>
                <h3 className="text-center text-xl font-bold">
                  Search a topic & begin drafting
                </h3>
              </div>
            </div>
            <h3 className="text-2xl text-center mt-16 fonr-normal">
              Empowered by Artificial Intelligence, EssayBot is 100%
              confidential with your private information.
            </h3>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-t from-gray-400 to-white py-16">
        <div className="max-w-[85%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24">
            <div className="bg-white p-4 flex items-center mb-8">
              <img
                src="/img/download (1).png"
                className="mr-5 w-[35%] h-1/2"
                alt=""
              />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">
                  Unlimited search database
                </h3>
                <p className="text-lg">
                  EssayBot searches information from millions of credible
                  websites and brings you the most relevant information
                  according to your search topic.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 flex items-center mb-8">
              <img
                src="/img/download (1).png"
                className="mr-5 w-[35%] h-1/2"
                alt=""
              />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">
                  Unlimited search database
                </h3>
                <p className="text-lg">
                  EssayBot searches information from millions of credible
                  websites and brings you the most relevant information
                  according to your search topic.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 flex items-center mb-8">
              <img
                src="/img/download (1).png"
                className="mr-5 w-[35%] h-1/2"
                alt=""
              />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">
                  Unlimited search database
                </h3>
                <p className="text-lg">
                  EssayBot searches information from millions of credible
                  websites and brings you the most relevant information
                  according to your search topic.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 flex items-center mb-8">
              <img
                src="/img/download (1).png"
                className="mr-5 w-[35%] h-1/2"
                alt=""
              />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">
                  Unlimited search database
                </h3>
                <p className="text-lg">
                  EssayBot searches information from millions of credible
                  websites and brings you the most relevant information
                  according to your search topic.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 flex items-center mb-8">
              <img
                src="/img/download (1).png"
                className="mr-5 w-[35%] h-1/2"
                alt=""
              />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">
                  Unlimited search database
                </h3>
                <p className="text-lg">
                  EssayBot searches information from millions of credible
                  websites and brings you the most relevant information
                  according to your search topic.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 flex items-center mb-8">
              <img
                src="/img/download (1).png"
                className="mr-5 w-[35%] h-1/2"
                alt=""
              />
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">
                  Unlimited search database
                </h3>
                <p className="text-lg">
                  EssayBot searches information from millions of credible
                  websites and brings you the most relevant information
                  according to your search topic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[85%] mx-auto">
          <h3 className="text-2xl font-bold text-center mb-7">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/img/Lee.png"
                className="rounded-full max-w-[150px] max-h-[150px] mb-5"
                alt=""
              />
              <h3 className="text-black text-3xl font-bold text-center">
                Lee,
              </h3>
              <h3 className="text-black text-3xl font-bold text-center mb-5">
                Los Angeles, CA
              </h3>
              <blockquote className="text-center px-10">
                EssayBot is simply the most efficient essay writing assistant
                I've ever come across.
              </blockquote>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/img/Alissa.png"
                className="rounded-full max-w-[150px] max-h-[150px] mb-5"
                alt=""
              />
              <h3 className="text-black text-3xl font-bold text-center">
                Lee,
              </h3>
              <h3 className="text-black text-3xl font-bold text-center mb-5">
                Los Angeles, CA
              </h3>
              <blockquote className="text-center px-10">
                EssayBot is simply the most efficient essay writing assistant
                I've ever come across.
              </blockquote>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/img/Tristan.png"
                className="rounded-full max-w-[150px] max-h-[150px] mb-5"
                alt=""
              />
              <h3 className="text-black text-3xl font-bold text-center">
                Lee,
              </h3>
              <h3 className="text-black text-3xl font-bold text-center mb-5">
                Los Angeles, CA
              </h3>
              <blockquote className="text-center px-10">
                EssayBot is simply the most efficient essay writing assistant
                I've ever come across.
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Home.Layout = NewCustomerLayout;

export default Home;
