import React, { Component } from 'react';
import data from '../constants/data'
import styles from '../stylesheets/index.css'
import PlaceTile from './PlaceTile'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlaceId: null
    }
    this.changeSelectedPlace = this.changeSelectedPlace.bind(this)
  }

  changeSelectedPlace(id){
    this.setState({selectedPlaceId: id})
  }

  render() {
    let message = ""

    let placeComponents = this.props.data.places.map( (placeObject) => {

      let selected=""

      if(placeObject.id === this.state.selectedPlaceId){
        selected = "done"
      }
      if(this.state.selectedPlaceId === this.props.data.favoritePlaceId) {
        message= "What a Beauty!"}

        let handleClickWrapper = () => {
          this.changeSelectedPlace(placeObject.id)
        }
      return (
      <PlaceTile
        key={placeObject.id}
        name={placeObject.name}
        id={placeObject.id}
        handleClickWrapper={handleClickWrapper}
        className={selected}
      />

      )
    })

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>

            {placeComponents}
          </div>
        </div>
        {message}
      </div>
    );
  }
}

export default App;
