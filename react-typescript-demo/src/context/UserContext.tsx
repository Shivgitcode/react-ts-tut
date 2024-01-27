import { createContext, useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
type User = AuthUser | null;

interface UserContextProviderProps {
  children: React.ReactNode;
}

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User>(null);

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
