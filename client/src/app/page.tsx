'use client'
import Navbar from "@PH/components/navbar/navbar";
import Typography from "@PH/components/ui-components/typography/typography";
import SearchForm from "@PH/forms/searchForm/searchForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Typography tag="h1" className="text-center bg-gray-100 pb-6">Réserver en ligne votre RDV</Typography>
        <SearchForm />
      </main>
    </>
  );
}
