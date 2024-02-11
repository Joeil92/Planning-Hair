"use client";
import Navbar from "@PH/components/navbar/navbar";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Container from "@PH/components/ui-components/container/container";

export default function Page() {
  return (
    <>
      <Navbar />
      <Container className="flex font-sans flex items-center justify-center bg-slate-50">
        <form className="flex-auto my-10 mx-72 ">
          <Container className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              Nom de l'entreprise
            </h1>

            <Container className="">
              <button
                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 mr-2"
                type="button"
              >
                Prestation
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="button"
              >
                Prendre un rdv
              </button>
            </Container>
            <Container className="w-full flex-auto flex text-sm font-medium text-slate-700">
              <ul className="list-none p-0 m-0 flex items-center flex align-item items-stretch items-center">
                <FaLocationDot size={18} className="mr-2" />
                <li className="mb-2 text-center">Api adresse</li>
              </ul>
            </Container>
            <Container className="flex-auto flex text-sm font-medium text-slate-700">
              <ul className="list-none p-0 m-0 flex items-center flex align-item items-stretch items-center">
                <FaStar size={20} className="mr-2" />
                <li className="mb-2">avis</li>
              </ul>
            </Container>
          </Container>
          <Container className="flex-auto grid grid-cols-2 gap-4 mt-8">
            <Container className="col-span-1">
              <img
                src="src/assets/img/1.jpg"
                alt="coiffure"
                className="w-full h-auto rounded-xl"
              />
            </Container>

            <Container className="col-span-1 grid grid-cols-2 gap-4">
              <Container className="col-span-1">
                <img
                  src="src/assets/img/2.jpg"
                  alt="coiffure"
                  className="w-full h-auto rounded-xl "
                />
              </Container>
              <Container className="col-span-1">
                <img
                  src="src/assets/img/3.jpg"
                  alt="coiffure"
                  className="w-full h-auto rounded-xl"
                />
              </Container>
              <Container className="col-span-1">
                <img
                  src="src/assets/img/4.jpg"
                  alt="coiffure"
                  className="w-full h-auto rounded-xl"
                />
              </Container>
              <Container className="col-span-1">
                <img
                  src="src/assets/img/5.jpg"
                  alt="coiffure"
                  className="w-full h-auto rounded-xl"
                />
              </Container>
            </Container>
          </Container>
          <div className="flex items-baseline my-2 pb-2 border-b border-slate-200"></div>
          <Container className="my-4">
            <p className="">Description : </p>
            <p className="">api</p>
          </Container>
          <div className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200"></div>
        </form>
      </Container>

      <Container className="font-sans flex items-center justify-center bg-slate-50">
        <form className="flex-auto my-4 mx-72">
          <h2 className="">Réservation en ligne</h2>
          <h3 className="">24/24 confirmation immédiate</h3>
        </form>
      </Container>
      <Container className="font-sans flex items-center justify-center bg-slate-50">
        <form className="flex-auto my-10 mx-72 ">
          <Container className="flex space-x-10">
            <h3 className="w-2/3">Choix des préstation : </h3>
            <h3 className="w-1/3">Horraires d'ouvertures : </h3>
          </Container>
          <Container className="flex mt-8 space-x-10">
            <Container className="w-2/3  p-4 rounded-xl shadow-xl">
              je ne sais pas quoi mettre :/
            </Container>
            <Container className="w-1/3 p-4 rounded-xl shadow-xl">
              <Container className="flex flex-wrap">
                <ul className="flex flex-auto justify-start">
                  <li className="">Api jour</li>
                  <li className="ml-auto ">08:30 - 19:00</li>
                </ul>
              </Container>
              <div className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200"></div>
              <Container className="flex flex-wrap">
                <ul className="flex flex-auto justify-start">
                  <li className="">Api jour</li>
                  <li className="ml-auto ">08:30 - 19:00</li>
                </ul>
              </Container>
              <div className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200"></div>
              <Container className="flex flex-wrap">
                <ul className="flex flex-auto justify-start">
                  <li className="">Api jour</li>
                  <li className="ml-auto ">08:30 - 19:00</li>
                </ul>
              </Container>
              <div className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200"></div>
              <Container className="flex flex-wrap">
                <ul className="flex flex-auto justify-start">
                  <li className="">Api jour</li>
                  <li className="ml-auto ">08:30 - 19:00</li>
                </ul>
              </Container>
              <div className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200"></div>
              <Container className="flex flex-wrap">
                <ul className="flex flex-auto justify-start">
                  <li className="">Api jour</li>
                  <li className="ml-auto ">08:30 - 19:00</li>
                </ul>
              </Container>
              <div className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200"></div>
              <Container className="flex flex-wrap">
                <ul className="flex flex-auto justify-start">
                  <li className="">Api jour</li>
                  <li className="ml-auto ">08:30 - 19:00</li>
                </ul>
              </Container>
              <div className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200"></div>
              <Container className="flex flex-wrap">
                <ul className="flex flex-auto justify-start">
                  <li className="">Api jour</li>
                  <li className="ml-auto ">Fermé</li>
                </ul>
              </Container>
            </Container>
          </Container>
        </form>
      </Container>
    </>
  );
}
