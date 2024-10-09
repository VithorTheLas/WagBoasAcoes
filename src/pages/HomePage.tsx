import WagBoasAcoes from "../assets/images/wag-boas-acoes-2.svg?react";
import AppStoreBadge from "../assets/images/apple-store-badge.svg?react";
import GooglePlayBadge from "../assets/images/google-play-badge.svg?react";
import Smartphone from "../assets/images/smartphone.png";
import HandsHearts from "../assets/images/hands-hearts-2.svg?react";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center gap-24 mt-44 px-6 mb-56">
        <WagBoasAcoes
          className="h-44 w-auto mt-2"
          aria-label="Wag Boas Ações"
        />
        <div className="flex flex-col gap-4 text-white text-left">
          <div className="font-semibold text-7xl leading-tight max-w-lg">
            O ser humano é bom.
          </div>
          <div className="font-normal text-base mr-16 max-w-md">
            We are good! Nascemos acreditando que o ser humano é bom na sua
            essência mais genuína. E acreditamos que, uma boa ação quando
            compartilhada, inspira outras pessoas a fazerem o mesmo. Ampliando o
            poder do bem.
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-white gap-40">
        <div className="flex flex-col text-custom-blue-2 leading-normal pb-24">
          <div className="font-normal text-base mt-24 max-w-sm">
            Faça parte da nossa rede. Entre para a WAG e seja um Agente do bem.
            Porque a solidariedade nunca pode parar. Ela deve sempre crescer.
          </div>
          <div className="font-semibold text-5xl mt-12">Baixe o app</div>
          <div className="flex mt-8 space-x-4 self-center">
            <GooglePlayBadge
              className="h-12 w-full"
              aria-label="Android Badge"
            />
            <AppStoreBadge className="h-12 w-full" aria-label="iOS Badge" />
          </div>
        </div>
        <div className="-mt-40 relative">
          <img className="h-auto w-80" src={Smartphone} alt="Smartphone" />
          <HandsHearts
            className="absolute bottom-0 ml-10"
            aria-label="Hands heart"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
