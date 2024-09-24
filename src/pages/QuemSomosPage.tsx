import Hands from "../assets/images/hands.svg?react";
import WagComoFazemos from "../assets/images/wag-como-fazemos.svg?react";

const QuemSomosPage = () => {
  return (
    <>
      <div className="flex flex-col px-16">
        <iframe
          className="h-[37.5rem] w-auto rounded-3xl mt-16"
          src="https://www.youtube.com/embed/snYu2JUqSWs?si=sAjtQPaCiOf9nkdt"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="flex px-24 space-x-40 mt-24 justify-center">
          <div className="flex flex-col space-y-9 text-white text-left">
            <div className="font-semibold text-6xl mt-20 max-w-xs leading-tight">
              Objetivo do WAG
            </div>
            <div className="font-normal text-2xl max-w-md">
              Reunir pessoas, empresas e instituições em uma rede do bem cuja
              missão é estruturar a cultura da solidariedade no Brasil por meio
              do fomento de boas ações, criando um ciclo permanente de
              solidariedade.
            </div>
          </div>
          <Hands aria-label="Hands" />
        </div>
        <div className="flex px-36 space-x-40 mt-24 mb-20 justify-center">
          <div className="flex flex-col space-y-9 text-white text-left">
            <div className="font-semibold text-6xl mt-20 max-w-md leading-tight">
          <WagComoFazemos aria-label="WagComoFazemos" />
              Como fazemos isso
            </div>
            <div className="font-normal text-2xl max-w-md">
              Conectando quem quer ajudar com quem precisa de ajuda. E
              compartilhando as boas ações para inspirar o próximo através de
              uma grande rede do bem.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuemSomosPage;
