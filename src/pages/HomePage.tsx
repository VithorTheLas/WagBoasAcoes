import WagApp from '../assets/images/wag-app.png'
import AppStoreBadge from '../assets/images/apple-store-badge.svg'
import GooglePlayBadge from '../assets/images/google-play-badge.svg'
import Smartphone from '../assets/images/smartphone.png'
import HandsHeart from '../assets/images/hands-heart.png'

const HomePage = () => {
  return (
    <>
      <div className='flex flex-row space-x-24 mt-44 mx-6 mb-56 justify-center'>
        <img
          className="flex h-44 w-auto flex-start items-start mt-2"
          src={WagApp}
          alt="WagApp"
        />
        <div className='flex flex-col space-y-4 text-white text-left'>
          <div className='font-semibold text-7xl leading-tight max-w-lg'>
            O ser humano é bom.
          </div>
          <div className='font-normal text-base mr-16 max-w-md'>
            We are good! Nascemos acreditando que o ser humano é bom na sua essência mais genuína. E acreditamos que, uma boa ação quando compartilhada, inspira outras pessoas a fazerem o mesmo. Ampliando o poder do bem.
          </div>
        </div>
      </div>
      <div className='flex flex-row bg-white justify-center space-x-40'>
        <div className='flex flex-col text-custom-blue-2 leading-normal pb-24'>
          <div className='font-normal text-base mt-24 max-w-sm'>
            Faça parte da nossa rede. Entre para a WAG e seja um Agente do bem. Porque a solidariedade nunca pode parar. Ela deve sempre crescer.
          </div>
          <div className='font-semibold text-5xl mt-12'>
            Baixe o app
          </div>
          <div className='flex flex-row mt-8 space-x-4 self-center'>
            <img
              className='h-12 w-full'
              src={GooglePlayBadge}
              alt="AndroidBadge"
            />
            <img
              className='h-12 w-full'
              src={AppStoreBadge}
              alt="iOSBadge"
            />
          </div>
        </div>
        <div className='-mt-40 justify-self-start'>
          <img
            className='h-auto w-80'
            src={Smartphone}
            alt="Smartphone"
          />
          <img
            className='h-auto w-72 -mt-80 ml-8'
            src={HandsHeart}
            alt="HandsHeart"
          />
        </div>
      </div>
    </>
  )
}

export default HomePage