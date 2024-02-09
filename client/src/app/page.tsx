'use client'
import Navbar from "@PH/components/navbar/navbar";
import Typography from "@PH/components/ui-components/typography/typography";
import { AuthContext } from "@PH/contexts/AuthContext";
import SearchForm from "@PH/forms/searchForm/searchForm";
import { useAuth } from "@PH/hooks/useAuth";
import { useContext } from "react";

export default function Home() {
  const { user } = useAuth();
  const { setUser } = useContext(AuthContext);
  
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Navbar />
      <main className="">
        <Typography tag="h1" className="text-center bg-gray-100 pb-6">Réserver en ligne votre RDV</Typography>
        <SearchForm />
      </main>
    </AuthContext.Provider>
  );
}
