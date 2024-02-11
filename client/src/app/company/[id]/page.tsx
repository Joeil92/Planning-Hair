"use client";
import Navbar from "@PH/components/components/navbar/navbar";
import Button from "@PH/components/ui-components/button/button";
import Container from "@PH/components/ui-components/container/container";
import Typography from "@PH/components/ui-components/typography/typography";
import { Company } from "@PH/types/company.interface";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

export default function Page({ params }: { params: { id: string } }) {
    const [company, setCompany] = useState<Company>();

    useEffect(() => {
        const getCompany = async () => {
            const res = await fetch(`http://localhost:8000/api/companies/${params.id}`, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            });
            const json = await res.json();

            setCompany(json);
        }

        getCompany();
    }, []);

    if(!company) return <Typography>Loading...</Typography>

    return (
        <>
            <Navbar />
            <Container className="flex font-sans flex items-center justify-center bg-slate-50">
                <Container className="flex-auto my-10 mx-72 ">
                    <Container className="flex flex-wrap">
                        <Typography className="flex-auto text-lg font-semibold">{company.name}</Typography>
                        <Container className="">
                            <Button type="primary-outline" onClick={() => {}} className="mx-6">Prestation</Button>
                            <Button type="primary" onClick={() => {}}>Prendre RDV</Button>
                        </Container>

                        <Container className="w-full flex-auto flex text-sm font-medium text-slate-700">
                            <ul className="list-none p-0 m-0 flex items-center flex align-item items-stretch items-center">
                                <FaLocationDot size={18} className="mr-2" />
                                <li className="mb-2 text-center">{company.address}</li>
                            </ul>
                        </Container>
                        <Container className="flex-auto flex text-sm font-medium text-slate-700">
                            <ul className="list-none p-0 m-0 flex items-center flex align-item items-stretch items-center">
                                <FaStar size={20} className="mr-2" />
                                <li className="mb-2">avis</li>
                            </ul>
                        </Container>
                    </Container>
                    <Container className="flex items-baseline my-2 pb-2 border-b border-slate-200">
                        <></>
                    </Container>
                    <Container className="my-4">
                        <Typography>Description : </Typography>
                        <Typography>{company.description || 'Aucune description'}</Typography>
                    </Container>
                    <Container className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200">
                        <></>
                    </Container>
                </Container>
            </Container>

            <Container className="font-sans flex items-center justify-center bg-slate-50">
                <Container className="flex-auto my-4 mx-72">
                    <h2 className="">Réservation en ligne</h2>
                    <h3 className="">24/24 confirmation immédiate</h3>
                </Container>
            </Container>
            <Container className="font-sans flex items-center justify-center bg-slate-50">
                <Container className="flex-auto my-10 mx-72 ">
                    <Container className="flex space-x-10">
                        <h3 className="w-2/3">Choix des préstation : </h3>
                        <h3 className="w-1/3">Horraires d'ouvertures : </h3>
                    </Container>
                    <Container className="flex mt-8 space-x-10">
                        <Container className="w-2/3  p-4 rounded-xl shadow-xl">
                            <></>
                        </Container>
                        <Container className="w-1/3 p-4 rounded-xl shadow-xl">
                            <Container className="flex flex-wrap">
                                <ul className="flex flex-auto justify-start">
                                    <li className="">Lundi</li>
                                    <li className="ml-auto ">{company.working_hour_start_morning_monday} - {company.working_hour_end_afternoon_monday}</li>
                                </ul>
                            </Container>
                            <Container className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200">
                                <></>
                            </Container>
                            <Container className="flex flex-wrap">
                                <ul className="flex flex-auto justify-start">
                                    <li className="">Mardi</li>
                                    <li className="ml-auto ">{company.working_hour_start_morning_tuesday} - {company.working_hour_end_afternoon_tuesday}</li>
                                </ul>
                            </Container>
                            <Container className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200">
                                <></>
                            </Container>
                            <Container className="flex flex-wrap">
                                <ul className="flex flex-auto justify-start">
                                    <li className="">Mercredi</li>
                                    <li className="ml-auto ">{company.working_hour_start_morning_wednesday} - {company.working_hour_end_afternoon_wednesday}</li>
                                </ul>
                            </Container>
                            <Container className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200">
                                <></>
                            </Container>
                            <Container className="flex flex-wrap">
                                <ul className="flex flex-auto justify-start">
                                    <li className="">Jeudi</li>
                                    <li className="ml-auto ">08:30 - 19:00</li>
                                </ul>
                            </Container>
                            <Container className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200">
                                <></>
                            </Container>
                            <Container className="flex flex-wrap">
                                <ul className="flex flex-auto justify-start">
                                    <li className="">Vendredi</li>
                                    <li className="ml-auto ">08:30 - 19:00</li>
                                </ul>
                            </Container>
                            <Container className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200">
                                <></>
                            </Container>
                            <Container className="flex flex-wrap">
                                <ul className="flex flex-auto justify-start">
                                    <li className="">Samedi</li>
                                    <li className="ml-auto ">08:30 - 19:00</li>
                                </ul>
                            </Container>
                            <Container className="flex items-baseline mt-2 mb-2 pb-2 border-b border-slate-200">
                                <></>
                            </Container>
                            <Container className="flex flex-wrap">
                                <ul className="flex flex-auto justify-start">
                                    <li className="">Api jour</li>
                                    <li className="ml-auto ">Fermé</li>
                                </ul>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </>
    );
}