import RedeDoBem from "../assets/images/rede-do-bem.svg?react";
import WagBoasAcoes2 from "../assets/images/wag-boas-acoes-2.svg?react";
import WagEmpresas from "../assets/images/wag-empresas.svg?react";
import Instagram from "../assets/images/insta.svg?react";
import MultipleHands from "../assets/images/multiple-hands.png";
import CellOnHandWithLogo from "../assets/images/cellphone-on-hand-with-logo.svg?react";
import ArrowDown from "../assets/images/arrow-down.svg?react";
import AppHomeScreenshot from "../assets/images/app-home-screenshot.svg?react";
import WagMoedas from "../assets/images/moedas-wag.svg?react";
import CellOnHandWithHand from "../assets/images/cellphone-on-hand-with-hand.svg?react";
import AppSearchScreenshot from "../assets/images/app-search-screenshot.svg?react";
import HandsHearts from "../assets/images/hands-hearts.svg?react";
import HandsFistbump from "../assets/images/hands-fistbump.svg?react";
import Handshake from "../assets/images/handshake.svg?react";

const ComoFuncionaPage = () => {
  return (
    <>
      <div className="flex flex-col space-y-[4.5rem] mt-44 mb-32 px-6">
        <div className="font-semibold text-white text-[3.5rem]">
          Como a nossa rede funciona
        </div>
        <div className="flex gap-32 justify-center">
          <RedeDoBem aria-label="Rede do Bem" />
          <WagBoasAcoes2 aria-label="Wag Boas Ações" />
          <WagEmpresas aria-label="Wag Empresas" />
        </div>
      </div>
      <div className="flex justify-center bg-white">
        <div className="flex flex-col">
          <div className="flex justify-center mt-24 gap-12 items-center px-6">
            <RedeDoBem aria-label="Rede do Bem" />
            <div className="text-custom-blue-2 font-normal text-2xl max-w-md leading-tight text-left">
              Uma grande rede de agentes do bem, instituições, empresas e
              parceiros que fazem acontecer. Ajudando quem quer doar e quem
              precisa.
            </div>
            <div className="flex flex-col text-center gap-3 items-center">
              <Instagram aria-label="Instagram" />
              <div className="text-custom-blue-2 font-semibold max-w-52 text-base leading-tight">
                Clique aqui para acessar o nosso Instagram e conhecer mais
              </div>
            </div>
          </div>
          <img
            className="h-[14.625rem]"
            src={MultipleHands}
            alt="Multiple Hands"
          />
        </div>
      </div>
      <div className="flex bg-custom-blue justify-center pt-20">
        <div className="flex flex-col items-center">
          <div className="flex justify-center gap-16">
            <CellOnHandWithLogo aria-label="Cell on hand with logo" />
            <div className="flex flex-col text-white gap-8 text-left">
              <div className="font-semibold text-[3.5rem]">Wag app</div>
              <div className="font-normal text-2xl max-w-[35rem] leading-tight">
                O nosso app é uma plataforma do bem para tornar mais fácil a
                conexão de quem quer ajudar com quem precisa de ajuda. Criando
                um ciclo contínuo de solidariedade no Brasil.
              </div>
            </div>
          </div>
          <div className="max-w-[15.25rem] font-semibold text-white text-2xl max-w-[35rem] leading-tight text-center">
            Conheça o app e suas funcionalidades
          </div>
          <ArrowDown className="mt-6 mb-14" aria-label="Arrow Down" />
        </div>
      </div>
    </>
  );
};

export default ComoFuncionaPage;
