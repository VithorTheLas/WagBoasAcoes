import CarFix from "../assets/images/car-fix.svg?react";

const ComoSurgiuPage = () => {
  return (
    <>
      <div className="flex justify-evenly gap-x-24 px-24 py-20 items-center">
        <CarFix className="hidden md:flex" aria-label="Car fix" />
        <div className="flex flex-col gap-8 text-white leading-tight text-left">
          <div className="text-[3.5rem] font-bold max-w-3xl">
            Pequenas ações fazem grandes diferenças
          </div>
          <div className="text-2xl font-normal max-w-xl">
            Em um final de dia chuvoso de Porto Alegre,
            <b> Mauricio Allgayer </b>
            se deparou com um carro enguiçado à sua frente enquanto voltava do
            trabalho. Lembrando que havia um cabo de aço no porta malas de sua
            camionete, ele ofereceu ajuda ao jovem motorista e, juntos,
            conseguiram rebocar até um estacionamento próximo. <br />
            <br />
            Grato pela ajuda, o homem perguntou o que poderia fazer para
            retribuir o favor e, logo, Mauricio disse: "Basta, em um dia
            qualquer, <b>ajudar alguém da mesma forma que eu lhe ajudei</b>,
            para criarmos um ciclo de solidariedade". <br />
            <br />
            Essa experiência inspirou Mauricio a criar, em parceria com seu
            amigo Rogério, o <b>WAG</b>, um aplicativo onde as pessoas podem
            compartilhar boas ações e incentivar outras a seguirem a corrente do
            bem.
          </div>
        </div>
      </div>
    </>
  );
};

export default ComoSurgiuPage;
