import trollFaceSvg from '../assets/troll-face.svg'
import reactSvg from '../assets/react.svg'
import tailwindcssSvg from '../assets/tailwindcss.svg'
import viteSvg from '../assets/vite.svg'

const Header = () => {
  return (
    <header className="absolute top-0 flex justify-between w-full py-6 text-white bg-gradient-to-r from-purple-800 to-purple-500 min-h-20 px-7">
      <div className="flex justify-between wrapper align-center">
        <a href="/" className="flex max-w-3xl gap-4 text-lg font-bold logo">
          <div className="image-wrapper">
            <img src={trollFaceSvg} alt="Troll Face Meme Icon" className="h-full w-9"/>
          </div>
          <h1>Meme Maker</h1>
        </a>
      </div>
      <div className="flex gap-4 image-wrapper">
            <img src={viteSvg} alt="Vite icon" className="h-full w-7"/>
            <img src={reactSvg} alt="React icon" className="h-full w-7"/>
            <img src={tailwindcssSvg} alt="Tailwind icon" className="h-full w-7"/>
      </div>
    </header>
  )
}

export default Header