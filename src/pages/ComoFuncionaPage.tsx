import RedeDoBem from "../assets/images/rede-do-bem.svg?react";
import WagBoasAcoes2 from "../assets/images/wag-boas-acoes-2.svg?react";
import WagEmpresas from "../assets/images/wag-empresas.svg?react";
import Instagram from "../assets/images/insta.svg?react";
import MultipleHands from "../assets/images/multiple-hands.png";
import CellOnHandWithLogo from "../assets/images/cellphone-on-hand-with-logo.svg?react";
import ArrowDown from "../assets/images/arrow-down.svg?react";
import HandsHearts from "../assets/images/hands-hearts.svg?react";
import AppHomeScreenshot from "../assets/images/app-home-screenshot.svg?react";
import WagMoedas from "../assets/images/moedas-wag.svg?react";
import CellOnHandWithHand from "../assets/images/cellphone-on-hand-with-hand.svg?react";
import Hands from "../assets/images/hands-2.svg?react";
import AppSearchScreenshot from "../assets/images/app-search-screenshot.svg?react";
import HandsFistbump from "../assets/images/hands-fistbump.svg?react";
import Handshake from "../assets/images/handshake.svg?react";

const ComoFuncionaPage = () => {
  return (
    <>
      <div className="flex flex-col space-y-16 py-32 px-6">
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
              <div className="font-normal text-2xl max-w-xl leading-tight">
                O nosso app é uma plataforma do bem para tornar mais fácil a
                conexão de quem quer ajudar com quem precisa de ajuda. Criando
                um ciclo contínuo de solidariedade no Brasil.
              </div>
            </div>
          </div>
          <div className="font-semibold text-white text-2xl max-w-60 leading-tight text-center">
            Conheça o app e suas funcionalidades
          </div>
          <ArrowDown className="mt-6 mb-14" aria-label="Arrow Down" />
        </div>
      </div>
      <div className="bg-white justify-center pt-20 pb-20">
        <div className="bg-no-repeat w-full h-auto bg-center bg-como-funciona-path">
          {/* path start */}
          {/* first box */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-4 items-center">
              <HandsHearts className="pt-8" aria-label="Hands Hearts" />
              <div className="text-custom-gray font-bold text-2xl max-w-52">
                Baixe o app e conheça a WAG
              </div>
            </div>
            <AppHomeScreenshot aria-label="App Home Screenshot" />
            <div className="flex flex-col text-custom-blue leading-tight gap-6 max-w-md text-left self-center">
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
          <div className="flex justify-between pt-8">
            <div className="flex justify-center gap-14">
              <div className="w-24"></div>
              <div className="flex flex-col gap-4 items-center">
                <WagMoedas aria-label="Wag Moedas" />
                <div className="text-custom-gray font-bold text-2xl max-w-52">
                  Ganhe moedas do bem a cada boa ação ou doação
                </div>
              </div>
              <div className="flex flex-col text-custom-blue leading-tight gap-6 text-left self-start pl-16">
                <div className="text-[2rem] font-semibold max-w-96">
                  Toda boa ação e doação recompensa.
                </div>
                <div className="text-2xl font-normal max-w-lg">
                  A cada boa ação e doação compartilhada você ganha uma moeda
                  WAG azul ou verde, que pode ser trocada por benefícios dos
                  nossos parceiros.
                </div>
              </div>
            </div>
            <div className="flex flex-end">
              <div className="text-custom-gray font-bold text-2xl max-w-48 pb-16 self-end">
                Encontre necessidades que precisam muito de ajuda
              </div>
              <div className="w-36"></div>
            </div>
          </div>
          {/* third box */}
          <div className="flex justify-end gap-16">
            <div className="flex flex-col text-custom-blue leading-tight gap-6 text-right pt-10">
              <div className="text-[2rem] font-semibold max-w-72 self-end">
                Curadoria em parcerias do bem.
              </div>
              <div className="text-2xl font-normal max-w-md self-end">
                A rede WAG tem um grande processo de parcerias e curadoria para
                conectar você a diversas instituições, e agentes do bem que
                precisam de ajuda.
              </div>
            </div>
            <div className="flex flex-end">
              <CellOnHandWithHand
                className="-mt-12"
                aria-label="Cell on hand with hand"
              />
              <div className="w-48"></div>
            </div>
          </div>
          {/* fourth box */}
          <div className="flex justify-center px-16 pt-9 mb-20">
            <div className="flex flex-col gap-36 mb-36">
              <div className="flex flex-col text-custom-blue leading-tight gap-6 text-right pt-20 max-w-md">
                <div className="text-[2rem] font-semibold self-end">
                  Uma plataforma que conecta quem quer ajudar com quem precisa
                  de ajuda.
                </div>
                <div className="text-2xl font-normal self-end">
                  Através do app WAG você tem acesso e pode contribuir com
                  diversas causas sem nenhum tipo de custo.
                </div>
              </div>
              <div className="flex flex-col items-center gap-6">
                <div className="text-custom-gray font-bold text-2xl max-w-48">
                  Faça doações e ajude pessoas e instituições
                </div>
                <Hands aria-label="Hands touching" />
              </div>
            </div>
            <div className="flex flex-col pr-20">
              <AppSearchScreenshot aria-label="App search screenshot" />
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex flex-col gap-8 items-start pl-10">
                <div className="text-custom-gray font-bold text-2xl max-w-52">
                  Compartilhe iniciativas do bem
                </div>
                <HandsFistbump aria-label="Hands fistbump" />
              </div>
              <div className="flex flex-col text-custom-blue leading-tight gap-6 text-left pt-20">
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
      <div className="flex justify-center items-center gap-20 bg-custom-blue px-36 pt-28 pb-44">
        <WagEmpresas className="h-auto w-36" aria-label="Wag Empresas Logo" />
        <div className="flex flex-col text-white gap-8 text-left">
          <div className="font-semibold text-[3.5rem]">WAG Empresa</div>
          <div className="font-normal text-2xl max-w-sm leading-tight">
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
