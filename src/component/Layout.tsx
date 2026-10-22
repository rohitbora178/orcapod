import { useState } from 'react'
import './Layout.css'

const options = [
  {
    id: 'immersive',
    label: 'Immersive learning',
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=640&q=85',
    alt: 'Immersive digital experience',
  },
  {
    id: 'complex',
    label: 'Complex eLearning',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=640&q=85',
    alt: 'Colorful digital technology',
  },
  {
    id: 'elearning',
    label: 'eLearning',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=640&q=85',
    alt: 'Learner using a laptop',
  },
  {
    id: 'medium',
    label: 'Medium complexity eLearning',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&q=85',
    alt: 'Electronic components and circuitry',
  },
]

const Layout = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <main className="learning-page container-fluid">
      <section aria-labelledby="question-title">
        <div className="question-header row g-2 align-items-stretch">
          <div className="col-12 col-lg-auto">
            <div className="question-count d-flex flex-row flex-lg-column align-items-center justify-content-between">
              <span>Question</span>
              <strong>01/02</strong>
            </div>
          </div>
          <div className="col-12 col-lg">
            <div className="question-copy">
              <p id="question-title">
                Below are three options on how to respond to the scenario above.
                Imagine the client side pings you and tells that they have a
                personal emergency and will need to be away from work.
              </p>
              <p className="question-prompt">You will ...</p>
            </div>
            <p className="question-hint">
              Below are three options on how to respond to the scenario above.
              Please choose the response that resonates most with you and click{' '}
              <strong>Next</strong> to proceed.
            </p>
          </div>
        </div>

        <fieldset className="option-grid row gx-0 justify-content-center">
          <legend className="visually-hidden">Choose a response</legend>
          {options.map((option) => (
            <div
              className="col-12 col-sm-4 col-xl-3 d-flex justify-content-center"
              key={option.id}
            >
              <label
                className="option-card d-flex flex-column align-items-center"
                htmlFor={`option-${option.id}`}
              >
                <img src={option.image} alt={option.alt} />
                <span className="option-label">{option.label}</span>
                <input
                  id={`option-${option.id}`}
                  type="checkbox"
                  name="response"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={(event) => {
                    setSelectedOption(event.target.checked ? option.id : '')
                    setIsSubmitted(false)
                  }}
                />
              </label>
            </div>
          ))}
        </fieldset>

        <div className="submit-wrap d-flex justify-content-center">
          <button
            className="btn submit-button"
            type="button"
            disabled={!selectedOption || isSubmitted}
            onClick={() => setIsSubmitted(true)}
          >
            {isSubmitted ? 'Submitted' : 'Submit'}
          </button>
        </div>
      </section>
    </main>
  )
}

export default Layout
