import Hands from "../assets/images/hands.svg?react";
import WagComoFazemos from "../assets/images/wag-como-fazemos.svg?react";
import WagVideo from "../assets/videos/2024_FILME_WAG_V5.mp4";

const QuemSomosPage = () => {
  return (
    <>
      <div className="flex flex-col px-6 md:px-16">
        <video
          className="h-[37.5rem] w-auto rounded-3xl mt-16"
          src={WagVideo}
          title="Wag Video"
          autoPlay={false}
          controls
        ></video>
        <div className="flex flex-col md:flex-row justify-center gap-y-8 md:gap-x-40 px-6 mt-24">
          <div className="flex flex-col space-y-9 text-white text-left justify-center">
            <div className="font-semibold text-6xl max-w-xs leading-tight">
              Objetivo do WAG
            </div>
            <div className="font-normal text-2xl max-w-md">
              Reunir pessoas, empresas e instituições em uma rede do bem cuja
              missão é estruturar a cultura da solidariedade no Brasil por meio
              do fomento de boas ações, criando um ciclo permanente de
              solidariedade.
            </div>
          </div>
          <Hands className="w-auto" aria-label="Hands" />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center px-6 mb-20 gap-y-8 mt-4 md:mt-24 md:gap-x-28">
          <WagComoFazemos className="w-auto" aria-label="WagComoFazemos" />
          <div className="flex flex-col space-y-9 text-white text-left justify-center max-w-sm">
            <div className="font-semibold text-6xl leading-tight">
              Como fazemos isso
            </div>
            <div className="font-normal text-2xl">
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
