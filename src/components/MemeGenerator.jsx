import TextInput from './TextInput'
import Button from './Button'
import memeGeneratorIcon from '../assets/image.svg'
import { useState, useEffect } from 'react'
import html2canvas from 'html2canvas'

const MemeGenerator = () => {
  const [memeData, setMemeData] = useState({
    imageSource: '',
    topText: 'Top text',
    bottomText: 'Bottom Text',
    memeImages: [],
  })

  // const [imageSource, setimageSource] = useState('')
  // const [topText, setTopText] = useState('Top Text')
  // const [bottomText, setBottomText] = useState('Bottom Text')
  // const [memeImages, setMemeImages] = useState([])

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch('https://api.imgflip.com/get_memes')
        const data = await response.json()
        if (data.success) {
          const filteredMemeImages = data.data.memes.filter(meme => meme.box_count > 0 && meme.box_count < 3 && meme.width < 900)
          
          setMemeData(prevMemeData => ({
            ...prevMemeData,
            memeImages: filteredMemeImages,
          }))
          
          getRandomMemeImage(filteredMemeImages)
        }
      } catch (error) {
        console.error('Error fetching memes:', error)
      }
    }

    fetchMemes()}, 

    [])
    
  const getRandomMemeImage = (images) => {
    if (images.length > 0) {
      setMemeData(prevMemeData => ({
        ...prevMemeData, 
        imageSource: images[Math.floor(Math.random() * images.length)].url,
      }))
    }
  }

  const handleTopTextChange = (e) => {
    setMemeData(prevMemeData => ({
      ...prevMemeData,
      topText: e.target.value,
    }))
  }

  const handleBottomTextChange = (e) => {
    setMemeData(prevMemeData => ({
      ...prevMemeData,
      bottomText: e.target.value,
    }))
  }

  const takeScreenshot = () => {
    const element = document.querySelector('.le-epic-meme')
    html2canvas(element, {allowTaint: false, useCORS: true}).then(canvas => {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'le-epic-meme.png'
      link.click()
    })
  }

  return (
    <>
      <form className="flex w-full gap-8 row">
        <div className="flex flex-col w-full col">
            <TextInput inputId="top-text-input" labelContent="Top Text" inputPlaceholder="Top Text" inputValue={memeData.topText} onChangeHandler={handleTopTextChange}/>
        </div>
        <div className="flex flex-col w-full col">
            <TextInput inputId="bottom-text-input" labelContent="Bottom Text" inputPlaceholder="Bottom Text" inputValue={memeData.bottomText} onChangeHandler={handleBottomTextChange}/>
        </div>
      </form>
      <div className="w-full row">
          <Button cta="true" icon={memeGeneratorIcon} onClickHandler={() => getRandomMemeImage(memeData.memeImages)}>Get Random Meme Image</Button>
      </div>
      <div className="w-full row">
        <div className="relative image-wrapper le-epic-meme">
          <img className="w-full h-auto my-6" src={memeData.imageSource} />
          <span className="absolute font-anton uppercase text-center text-4xl inset-x-4 top-4 text-white before:content-[attr(data-top-text)]" data-top-text={memeData.topText}></span>
          <span className="absolute font-anton uppercase text-center text-4xl inset-x-4 bottom-4 text-white before:content-[attr(data-bottom-text)]" data-bottom-text={memeData.bottomText}></span>
        </div>
      </div>
      <div className="w-full row">
          <Button onClickHandler={takeScreenshot}>Download Meme</Button>
      </div>
    </>
  )
}

export default MemeGenerator