import InstagramIcon from "../assets/images/instagram-icon.png";
import FacebookIcon from "../assets/images/facebook-icon.png";
import LinkedInIcon from "../assets/images/linkedin-icon.png";
import WhatsAppIcon from "../assets/images/whatsapp-icon.png";
import { useState } from "react";
import Checkbox from "../components/Checkbox";
import InputText from "../components/InputText";

const ContatoPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send form with info
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center px-10 py-10 gap-x-14">
        <div className="flex flex-col text-base text-white max-w-lg font-semibold leading-tight gap-y-5 text-start">
          <div className="text-7xl">Quer fazer boas ações?</div>
          <div className="text-[2rem]">Entre em contato com a gente!</div>
          <div className="font-bold pt-5">TELEFONE</div>
          <div>+55 51 99524 5265</div>
          <div className="font-bold pt-5">E-MAIL</div>
          <div>wag@wearegood.com.br</div>
          <div className="font-bold pt-5">ENDEREÇO</div>
          <div>
            Av Carlos Gomes, 222 - 8° andar Boa Vista | 90480-000 Porto
            Alegre/RS
          </div>
          <div className="font-bold pt-5">REDES SOCIAIS</div>
          <div className="flex gap-x-8">
            <img
              className="h-14 w-auto"
              src={InstagramIcon}
              alt="Instagram Icon"
            />
            <img
              className="h-14 w-auto"
              src={FacebookIcon}
              alt="Facebook Icon"
            />
            <img
              className="h-14 w-auto"
              src={LinkedInIcon}
              alt="LinkedIn Icon"
            />
            <img
              className="h-14 w-auto"
              src={WhatsAppIcon}
              alt="WhatsApp Icon"
            />
          </div>
        </div>
        <div className="flex flex-col text-white max-w-lg leading-tight text-start">
          <form className="flex flex-col gap-y-8" onSubmit={submitForm}>
            <div className="text-2xl font-semibold pt-4">Entre em contato</div>
            <InputText
              id="name"
              required
              label="Nome"
              value={name}
              onChange={setName}
            />
            <InputText
              id="e-mail"
              type="email"
              required
              label="E-mail"
              value={email}
              onChange={setEmail}
            />
            <InputText
              id="telephone"
              type="tel"
              label="Telefone"
              value={telephone}
              onChange={setTelephone}
            />
            <div>
              <div className="text-base font-normal mb-2">Mensagem</div>
              <textarea
                id="message"
                className="position-absolute border border-white rounded-lg bg-custom-blue w-full h-60 py-3 px-4 text-left self-start resize-none"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex items-start gap-x-3">
              <Checkbox />
              <div className="font-light">
                Desejo receber informações sobre a WAG e suas empresas.
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <Checkbox required />
              <div className="font-light">
                Aceito a declaração de privacidade apresentados, autorizando o
                uso dos meus dados pessoais informados para o contato de um
                representante oficial da WAG, e afirmo ter mais de 18 anos.
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-white text-custom-blue p-4 rounded-lg font-semibold text-2xl"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContatoPage;
