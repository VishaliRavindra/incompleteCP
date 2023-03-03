import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails} = props
  const {language} = languageDetails

  return (
    <li className="language-container">
      <button type="button" className="button">
        <p>{language}</p>
      </button>
    </li>
  )
}

export default LanguageFilterItem
