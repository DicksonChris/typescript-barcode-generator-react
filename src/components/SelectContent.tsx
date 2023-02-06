import React from 'react'
import '../styles/selectContent.css'

type CardProps = {
  title: string
  imgSrc: string
  imgAlt: string
  index: number
}

const Card = ({ title, imgSrc, imgAlt, index }: CardProps) => {
  return (
    <label htmlFor={`new-project-radio-${index}`} className="label-for-radio m-4">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <div className="flex">
            <h2 className="inline-block card-title flex-1">{title}</h2>
          </div>
        </div>
        <figure>
          <img src={imgSrc} alt={imgAlt} aria-hidden={true} />
        </figure>
      </div>
    </label>
  )
}

export const SelectContent = () => {
  const cardsData = [
    {
      title: 'Barcode Image',
      imgSrc: 'https://placeimg.com/400/225/arch',
      imgAlt: 'Barcode image example',
    },
    {
      title: 'Simple Barcode Project',
      imgSrc: 'https://placeimg.com/400/225/arch',
      imgAlt: 'Simple barcode project example',
    },
    {
      title: 'Multi Barcode Project',
      imgSrc: 'https://placeimg.com/400/225/arch',
      imgAlt: 'Multi barcode project example',
    },
  ]
  return (
    <div className="bg-base-300 pb-4 rounded-b-2xl">
      <div className="flex justify-center mb-8">
        <h1 className="text-4xl font-bold select-none">Choose Project Format</h1>
      </div>
      <div className="flex flex-wrap justify-center mb-8">
        {cardsData.map((cardData, index) => (
          <React.Fragment key={index}>
            <input
              type="radio"
              name="new-project-radio"
              id={`new-project-radio-${index}`}
              className="radio-with-label flex-0 radio checked:radio-primary "
              defaultChecked={index === 0}
            />
            <Card
              title={cardData.title}
              imgSrc={cardData.imgSrc}
              imgAlt={cardData.imgAlt}
              index={index}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-primary">Create Project</button>
      </div>
    </div>
  )
}
