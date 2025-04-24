import { SearchForm } from "./components/SearchForm";
import { ProfileCard } from "./components/ProfileCard";
import { ErrorMsg } from "./components/ErrorMsg";
import { useState } from "react";
import { UserSkeleton } from "./components/UserSkeleton"; // 👈 import
import logoGitHub from "../src/img/logo.png";

function App() {
  const [username, setUsername] = useState("");
  const [userdata, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    if (!username.trim()) {
      setError("Por favor, digite um usuário do GitHub");
      return;
    }
    setLoading(true);
    setError("");
    setUserData(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok || response.status === 404) {
        console.log(error);
        throw new Error("Perfil não encontrado");
      } else {
        const data = await response.json();
        setUserData(data);
      }
    } catch (error) {
      console.log("error no fecth", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen bg-[#111] overflow-hidden flex flex-col items-center pt-20">
     {/* Glow grande — inferior‑esquerdo */}
     <div
        className={`
          absolute
          bottom-[-200px] left-[-600px]
          w-[900px] h-[900px]
          bg-[radial-gradient(circle_at_center,#0055FF80_0%,transparent_60%)]
          blur-[250px]
          pointer-events-none
        `}
      />

      {/* Glow menor — superior‑direito */}
      <div
        className={`
          absolute
          top-[-100px] right-[-400px]
          w-[600px] h-[600px]
          bg-[radial-gradient(circle_at_center,#0055FF80_0%,transparent_60%)]
          blur-[180px]
          pointer-events-none
        `}
      />
      <div className=" bg-black flex flex-col items-center justify-center py-8 w-10/12 min-h-[90vh] -mt-12 ">
        <div className=" bg-black p-12 w-full text-white mb-10 ">
          <div className="flex items-center justify-center mb-10">
            <img
              src={logoGitHub}
              alt="GitHub Logo"
              className="mr-5 h-[6em] self-center"
            />
            <h1 className="text-7xl flex items-baseline">
              <span className="text-white">Perfil</span>
              <span className="ml-2 font-bold text-white-500">GitHub</span>
            </h1>
          </div>

          <SearchForm
            username={username}
            onChange={setUsername}
            onSearch={fetchProfile}
            loading={loading}
          />

          {loading && <UserSkeleton />}

          {error && <ErrorMsg message={error} />}
          {userdata && (
            <ProfileCard
              avatarUrl={userdata.avatar_url}
              name={userdata.name}
              bio={userdata.bio}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
