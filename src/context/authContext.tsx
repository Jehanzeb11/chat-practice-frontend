// authContext.tsx
import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import baseUrl from "../utils/api";

interface UserContextType {
  username: string | null;
  userId: string | null;
  setUserName: (name: string | null) => void;
  setUserId: (id: string | null) => void;
}

export const userContext = createContext<UserContextType>({
  username: null,
  userId: null,
  setUserName: () => {},
  setUserId: () => {},
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUserName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

useEffect(()=>{

const getUser = async ()=>{
    if (userId) {
        
    try {
        const res = await axios.get(`${baseUrl}/profile/${userId}`)

        console.log("profile ==== >>. ",res)
if (res.status === 200) {
    setUserName(res?.data?.user?.username)
}

        setUserName

    } catch (error) {
        console.log(error)
    }

    }
}

getUser()

},[userId])

  return (
    <userContext.Provider value={{ username, userId, setUserName, setUserId }}>
      {children}
    </userContext.Provider>
  );
};
