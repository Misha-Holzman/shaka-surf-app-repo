import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiN2V2YW0iLCJhIjoiY2puYnRtY3h6MDdhazNvbzRpMjVpcnpnZCJ9.KxFIKLS9FfJbRXtMTjxrig';

class Mapbox extends Component {
    constructor(props){
        super(props)
        this.state = {
            locations: [],
            viewport: {
                width: 780,
                height: 400,
                latitude:   43.080722,
                longitude: -76.127694,
                zoom: 6
            }
        }
        // this._renderMarker = this._renderMarker.bind(this);
    }

    // componentDidMount(){
    // FishingApi.getLocations()
    //     .then((locations) => {
    //         this.setState(locations);
    //         // console.log("state", locations);
    //     })
    // }
    // _renderMarker = (result, i) => {
    //     console.log(result)
    //     // const lat = result.latitude;
    //     // const lng = result.longitude;
    //     //
    //     // return(
    //     //     <Marker key={`result-${i}`} longitude={lng} latitude={lat} >
    //     //         <Pin size={20} />
    //     //     </Marker>
    //     // )
    // }

    render() {
        const data  = this.state;
        // console.log(data)
        return (
            <div className="map">
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange= {(viewport) => this.setState({viewport})}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                {(this._renderMarker)}
            </ReactMapGL>
            </div>
        );
    }
}

export default Mapbox;
