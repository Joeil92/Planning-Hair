'use client'
import { AuthContext } from "@PH/contexts/AuthContext";
import { useAuth } from "@PH/hooks/useAuth";
import { useContext } from "react";

export default function Home() {
  const { user } = useAuth();
  const { setUser } = useContext(AuthContext);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <main className="">

      </main>
    </AuthContext.Provider>
  );
}
