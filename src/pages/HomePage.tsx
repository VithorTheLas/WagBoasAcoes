import WagBoasAcoes from "../assets/images/wag-boas-acoes-2.svg?react";
import AppStoreBadge from "../assets/images/apple-store-badge.svg?react";
import GooglePlayBadge from "../assets/images/google-play-badge.svg?react";
import SmartphoneWithHands from "../assets/images/smartphone-with-hands-heart.png";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center md:bg-home-people bg-contain md:bg-cover bg-no-repeat gap-x-6 md:gap-x-24 px-6 py-24 md:pb-56 md:-mt-24 md:pt-44">
        <WagBoasAcoes
          className="hidden md:flex w-auto h-44 mt-2"
          aria-label="Wag Boas Ações"
        />
        <div className="flex flex-col gap-y-4 text-white text-center md:text-left">
          <div className="font-semibold text-[3.5rem] md:text-7xl max-w-lg leading-tight md:leading-tight">
            O ser humano é bom.
          </div>
          <div className="font-normal text-base max-w-md mr-0 md:mr-16 self-center md: self-left">
            We are good! Nascemos acreditando que o ser humano é bom na sua
            essência mais genuína. E acreditamos que, uma boa ação quando
            compartilhada, inspira outras pessoas a fazerem o mesmo. Ampliando o
            poder do bem.
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-white gap-y-40 px-6">
        <div className="flex flex-col text-custom-blue-2 leading-normal pb-24">
          <div className="font-normal text-base mt-24 max-w-sm">
            Faça parte da nossa rede. Entre para a WAG e seja um Agente do bem.
            Porque a solidariedade nunca pode parar. Ela deve sempre crescer.
          </div>
          <div className="font-semibold text-5xl mt-12">Baixe o app</div>
          <div className="flex mt-8 space-x-4 self-center">
            <a
              href={import.meta.env.VITE_PLAY_STORE_LINK}
              rel="noreferrer"
              target="_blank"
            >
              <GooglePlayBadge
                className="h-12 w-full"
                aria-label="Android Badge"
              />
            </a>
            <a
              href={import.meta.env.VITE_APPLE_STORE_LINK}
              rel="noreferrer"
              target="_blank"
            >
              <AppStoreBadge className="h-12 w-full" aria-label="iOS Badge" />
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:-mt-40 md:relative">
          <img
            className="h-auto w-80"
            src={SmartphoneWithHands}
            alt="Smartphone"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
