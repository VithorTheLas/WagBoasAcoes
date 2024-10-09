import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import homeBg from "../assets/images/home-bg.png";
import comoFuncionaBg from "../assets/images/como-funciona-bg.png";

interface Route {
  path: string;
  background: string;
}

interface BackgroundHandlerProps {
  children: ReactNode;
}

const BackgroundHandler: React.FC<BackgroundHandlerProps> = ({ children }) => {
  const location = useLocation();
  const routes: Route[] = [
    { path: "/", background: homeBg },
    { path: "/como-funciona", background: comoFuncionaBg },
  ];

  const currentRoute = routes.find((route) => route.path === location.pathname);

  return (
    <div
      className={`relative min-h-screen ${currentRoute ?? "bg-custom-blue"}`}
    >
      {currentRoute && (
        <img
          src={currentRoute.background}
          alt="Background"
          className="absolute w-full h-auto object-cover -z-10"
        />
      )}
      {children}
    </div>
  );
};

export default BackgroundHandler;
