import RedeDoBem from "../assets/images/rede-do-bem.svg?react";
import WagBoasAcoes2 from "../assets/images/wag-boas-acoes-2.svg?react";
import WagEmpresas from "../assets/images/wag-empresas.svg?react";
import Instagram from "../assets/images/insta.svg?react";
import MultipleHands from "../assets/images/multiple-hands.png";
import CellOnHandWithLogo from "../assets/images/cellphone-on-hand-with-logo.svg?react";
import ArrowDown from "../assets/images/arrow-down.svg?react";
import HandsHearts from "../assets/images/hands-hearts.png";
import AppHomeScreenshot from "../assets/images/app-home-screenshot.svg?react";
import CellOnHandWithHand from "../assets/images/cellphone-on-hand-with-hand.svg?react";
import Hands from "../assets/images/hands-2.svg?react";
import AppSearchScreenshot from "../assets/images/app-search-screenshot.svg?react";
import HandsFistbump from "../assets/images/hands-fistbump.svg?react";
import Handshake from "../assets/images/handshake.svg?react";

const ComoFuncionaPage = () => {
  return (
    <>
      <div className="flex flex-col justify-between md:bg-como-funciona-hands bg-contain md:bg-cover bg-no-repeat gap-y-16 px-6 py-32 md:-mt-24 md:gap-x-24 md:pt-44">
        <div className="font-semibold text-white text-[3.5rem] leading-tight">
          Como a nossa rede funciona
        </div>
        <div className="flex justify-center gap-x-8 md:gap-x-32">
          <RedeDoBem aria-label="Rede do Bem" />
          <WagBoasAcoes2 aria-label="Wag Boas Ações" />
          <WagEmpresas aria-label="Wag Empresas" />
        </div>
      </div>
      <div className="flex justify-center bg-white">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center mt-24 gap-x-12 gap-y-8 items-center px-6 md:flex-row">
            <RedeDoBem aria-label="Rede do Bem" />
            <div className="text-custom-blue-2 font-normal text-2xl max-w-md leading-tight text-center md:text-left">
              Uma grande rede de agentes do bem, instituições, empresas e
              parceiros que fazem acontecer. Ajudando quem quer doar e quem
              precisa.
            </div>
            <a
              className="flex flex-col text-center gap-3 items-center"
              href={import.meta.env.VITE_INSTAGRAM_LINK}
              rel="noreferrer"
              target="_blank"
            >
              <Instagram aria-label="Instagram" />
              <div className="text-custom-blue-2 font-semibold max-w-52 text-base leading-tight">
                Clique aqui para acessar o nosso Instagram e conhecer mais
              </div>
            </a>
          </div>
          <img className="max-h-60" src={MultipleHands} alt="Multiple Hands" />
        </div>
      </div>
      <div className="flex bg-custom-blue justify-center pt-20">
        <div className="flex flex-col items-center gap-y-8">
          <div className="flex justify-center gap-x-8 md:gap-x-16">
            <CellOnHandWithLogo
              className="hidden md:flex"
              aria-label="Cell on hand with logo"
            />
            <div className="flex flex-col text-white gap-y-8 text-center md:text-left">
              <div className="font-semibold text-[3.5rem]">Wag app</div>
              <div className="font-normal text-2xl max-w-xl leading-tight px-8 md:px-0">
                O nosso app é uma plataforma do bem para tornar mais fácil a
                conexão de quem quer ajudar com quem precisa de ajuda. Criando
                um ciclo contínuo de solidariedade no Brasil.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-y-2 items-center">
            <div className="font-semibold text-white text-2xl max-w-60 leading-tight text-center">
              Conheça o app e suas funcionalidades
            </div>
            <ArrowDown className="mt-6 mb-14" aria-label="Arrow Down" />
          </div>
        </div>
      </div>
      <div className="bg-white justify-center">
        <div className="bg-no-repeat bg-center md:bg-como-funciona-path pt-40">
          {/* path start */}
          {/* first box */}
          <div className="flex flex-col justify-center gap-y-8 md:flex-row">
            <div className="flex flex-col gap-4 items-center">
              <img
                src={HandsHearts}
                className="pt-8"
                aria-label="Hands Hearts"
              />
              <div className="text-custom-gray font-bold text-2xl max-w-52">
                Baixe o app e conheça a WAG
              </div>
            </div>
            <AppHomeScreenshot
              className="hidden md:flex"
              aria-label="App Home Screenshot"
            />
            <div className="flex flex-col text-custom-blue leading-tight gap-y-6 max-w-md text-left self-center text-center md:text-left px-8 md:px-0">
              <div className="text-[2rem] font-semibold">
                Acreditamos que uma boa ação quando compartilhada inspira outras
                pessoas a fazerem o mesmo.
              </div>
              <div className="text-2xl font-normal">
                Por isso, nosso app foi desenvolvido para você compartilhar suas
                boas ações e ver as boas ações dos outros.
              </div>
            </div>
          </div>
          {/* second box */}
          <div className="flex flex-col md:flex-row justify-center gap-x-8 md:gap-x-16 pt-16 pl-0 md:pl-32">
            <div className="flex flex-col gap-y-7">
              <div className="flex text-custom-gray font-bold text-2xl max-w-48 self-center ml-0 md:ml-10">
                Encontre necessidades que precisam muito de ajuda
              </div>
              <CellOnHandWithHand
                className="hidden md:flex"
                aria-label="Cell on hand with hand"
              />
            </div>
            <div className="flex flex-col text-custom-blue leading-tight gap-y-6 text-center md:text-left pt-16 md:pt-2 px-8 md:px-0">
              <div className="text-[2rem] font-semibold max-w-72 self-center md:self-start">
                Curadoria em parcerias do bem.
              </div>
              <div className="text-2xl font-normal max-w-md self-center md:self-start">
                A rede WAG tem um grande processo de parcerias e curadoria para
                conectar você a diversas instituições, e agentes do bem que
                precisam de ajuda.
              </div>
            </div>
          </div>
          {/* third box */}
          <div className="flex flex-col md:flex-row justify-center px-16 pt-16 md:pt-20 pb-40">
            <div className="flex flex-col content-start text-custom-blue leading-tight gap-y-6 max-w-sm self-center md:self-start text-center md:text-right md:mt-64">
              <div className="text-[2rem] font-semibold">
                Uma plataforma que conecta quem quer ajudar com quem precisa de
                ajuda.
              </div>
              <div className="text-2xl font-normal">
                Através do app WAG você tem acesso e pode contribuir com
                diversas causas sem nenhum tipo de custo.
              </div>
            </div>
            <div className="flex flex-col mt-16 md:mt-44 ml-9">
              <AppSearchScreenshot
                className="hidden md:flex"
                aria-label="App search screenshot"
              />
            </div>
            <div className="flex flex-col md:items-start">
              <div className="flex flex-col items-center gap-y-6 ml:0 md:-ml-8">
                <div className="text-custom-gray font-bold text-2xl max-w-48">
                  Faça doações e ajude pessoas e instituições
                </div>
                <Hands aria-label="Hands touching" />
              </div>
              <div className="flex flex-col items-center gap-y-6 ml-0 md:ml-12 mt-16 md:mt-72">
                <div className="text-custom-gray font-bold text-2xl max-w-52">
                  Compartilhe iniciativas do bem
                </div>
                <HandsFistbump aria-label="Hands fistbump" />
              </div>
              <div className="flex flex-col text-custom-blue leading-tight gap-y-6 items-center md:items-start text-center md:text-left pt-10 ml-0 md:ml-2">
                <div className="text-[2rem] font-semibold max-w-sm">
                  Na WAG é mais fácil compartilhar o bem
                </div>
                <div className="text-2xl font-normal max-w-md">
                  Em apenas um clique você compartilha as campanhas de doação
                  dos nossos parceiros e ajudar a trazer mais gente para nossa
                  rede.
                </div>
              </div>
            </div>
          </div>
          {/* path end */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-y-20 gap-x-20 bg-custom-blue md:px-36 pt-28 pb-44">
        <WagEmpresas className="h-auto w-36" aria-label="Wag Empresas Logo" />
        <div className="flex flex-col text-white gap-8 text-center md:text-left leading-tight">
          <div className="font-semibold text-[3.5rem]">WAG Empresa</div>
          <div className="font-normal text-2xl max-w-sm">
            Um braço focado em criar ferramentas que promovam a cultura da
            solidariedade em empresas, o S do ESG na prática.
          </div>
        </div>
        <Handshake aria-label="Handshake" />
      </div>
    </>
  );
};

export default ComoFuncionaPage;
