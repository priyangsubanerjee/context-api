import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function Home() {
  const auth = useContext(AuthContext);
  return (
    <>
      <div>
        <h3>{auth.user.name}</h3>
        <p>{auth.user.email}</p>
      </div>
    </>
  );
}
