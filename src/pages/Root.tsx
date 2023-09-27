import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { useAuth } from "../hooks/useAuth";

export const Root = () => {
  const user = useAuth();

  return (
    <>
      <Header isAuthorized={!!user} />
      <Outlet />
    </>
  );
};
