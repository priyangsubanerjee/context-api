import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function Account() {
  const auth = useContext(AuthContext);
  if (auth.user == null) {
    return (
      <>
        <div>Loading ....</div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h3>{auth.user.name}</h3>
          <p>{auth.user.email}</p>
          <button
            onClick={() => {
              localStorage.setItem("user", JSON.stringify(auth.user));
            }}
          >
            Logout
          </button>
        </div>
      </>
    );
  }
}
