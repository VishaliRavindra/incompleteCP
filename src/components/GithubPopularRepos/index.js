import {Component} from 'react'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].tabId,
    languageList: [],
  }

  componentDidMount() {
    this.getLanguages()
  }

  getLanguages = async () => {
    const apiUrl = 'https://apis.ccbp.in/popular-repos'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        languageList: updatedData,
      })
    }
  }

  render() {
    const {activeTabId, languageList} = this.state
    return (
      <div>
        <h1>Popular</h1>
        <ul className="language-un-list">
          {languageFiltersData.map(item => (
            <LanguageFilterItem key={item.id} languageDetails={item} />
          ))}
        </ul>

        <ul className="each-details">
          {languageList.map(each => (
            <RepositoryItem key={each.id} itemDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
