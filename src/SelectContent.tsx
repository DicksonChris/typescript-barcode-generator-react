import React from 'react'
import './styles/selectContent.css'

const SelectContent = () => {
  return (
    // Create draggable window dialog
    <div className='mockup-window border bg-base-300'>
      <div className="flex justify-center mb-8">
        <h1 className="text-4xl font-bold">Choose Project Format</h1>
      </div>
      <div className="flex flex-wrap justify-center mb-8">
        {/* Card 1 */}
        <input
          type="radio"
          name="new-project-radio"
          id="new-project-radio-1"
          className="radio-with-label flex-0 radio checked:radio-primary "
        />
        {/* 
          CSS selector used to highlight cards when selected: 
          .radio-with-label:checked + .label-for-radio  > .card 
      */}

        <label htmlFor="new-project-radio-1" className="label-for-radio m-4">
          <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
              <div className="flex">
                <h2 className="inline-block card-title flex-1">Barcode Image</h2>
              </div>
            </div>
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
          </div>
        </label>
        {/* Card 2 */}
        <input
          type="radio"
          name="new-project-radio"
          id="new-project-radio-2"
          className="radio-with-label flex-0 radio checked:radio-primary "
        />
        <label htmlFor="new-project-radio-2" className="label-for-radio m-4">
          <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
              <div className="flex">
                <h2 className="inline-block card-title flex-1">Simple Barcode Project</h2>
              </div>
            </div>
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
          </div>{' '}
        </label>

        {/* Card 3 */}
        <input
          type="radio"
          name="new-project-radio"
          id="new-project-radio-3"
          className="radio-with-label flex-0 radio checked:radio-primary "
        />
        <label htmlFor="new-project-radio-3" className="label-for-radio m-4">
          <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
              <div className="flex">
                <h2 className="inline-block card-title flex-1">Multi Barcode Project</h2>
              </div>
            </div>
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
          </div>{' '}
        </label>
      </div>
      <div className="flex justify-center mb-8">
        <button className="btn btn-primary">Create Project</button>
      </div>
    </div>
  )
}

export default SelectContent
