import {Component} from 'react'

import './index.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

const initialList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
]

const CountryNameList = props => {
  const {eachCountry, visitedCont, visited} = props
  const {name, id} = eachCountry

  const onVisitCountry = () => {
    visitedCont(id)
  }

  return (
    <li className="country-name-btn-cont">
      <p className="country-name">{name}</p>
      <button type="button" onClick={onVisitCountry}>
        visit
      </button>
    </li>
  )
}

const VisitedCountry = props => {
  const {newVisit, removeClickedCountry} = props
  const {name, imageUrl, id} = newVisit[0]
  const onRemove = () => {
    removeClickedCountry(id)
  }

  console.log(name)
  return (
    <li className="visited-contry-list">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <div className="remove-btn-cont">
        <p className="country-name">{name}</p>
        <button type="button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}

class CountryVisit extends Component {
  state = {visitedCountries: [], isVisited: false}

  visitedContList = id => {
    const visitedCountry = initialCountriesList.filter(
      eachList => eachList.id === id,
    )
    this.setState(prevState => ({
      visitedCountries: [...prevState.visitedCountries, visitedCountry],
    }))
  }

  onDelete = id => {
    const {visitedCountries} = this.state
    const deletedList = visitedCountries.filter(
      eachVisitedList => eachVisitedList[0].id !== id,
    )
    this.setState({visitedCountries: deletedList})
  }

  render() {
    const {visitedCountries, isVisited} = this.state
    return (
      <div className="main-cont">
        <h1 className="main-head">Countries</h1>
        <ul className="countryname-cont">
          {initialCountriesList.map(eachCountry => (
            <CountryNameList
              eachCountry={eachCountry}
              key={eachCountry.id}
              visitedCont={this.visitedContList}
              visited={isVisited}
            />
          ))}
        </ul>
        <h1 className="main-head">Visited Countries</h1>
        <ul className="visited-contry-cont">
          {visitedCountries.map(eachVisit => (
            <VisitedCountry
              newVisit={eachVisit}
              key={eachVisit.name}
              removeClickedCountry={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CountryVisit
