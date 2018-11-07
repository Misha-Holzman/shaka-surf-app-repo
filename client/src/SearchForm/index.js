// import React, { Component } from "react";
// import { GoogleComponent } from 'react-google-location'
// import "bulma";
// import "./style.css";
// import 'opencage-api-client';

// // import Geocode from "react-geocode";

// // // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
// // Geocode.setApiKey("AIzaSyAku0BETxeS5Srvsxx-FShDG577WobG6yU");
// // const API_KEY = "AIzaSyAku0BETxeS5Srvsxx-FShDG577WobG6yU"  // how to get key - step are below

// function geocoding() {

// const opencage = require('opencage-api-client');

// opencage.geocode({q: 'Theresienhöhe 11, München'}).then(data => {
//   console.log(JSON.stringify(data));
//   if (data.status.code == 200) {
//     if (data.results.length > 0) {
//       let place = data.results[0];
//       console.log(place.formatted);
//       console.log(place.geometry);
//       console.log(place.annotations.timezone.name);
//     }
//   } else if (data.status.code == 402) {
//     console.log('hit free-trial daily limit');
//     console.log('become a customer: https://opencagedata.com/pricing');
//   } else {
//     // other possible response codes:
//     // https://opencagedata.com/api#codes
//     console.log('error', data.status.message);
//   }
// }).catch(error => {
//   console.log('error', error.message);
// });

// }

// // ... prints
// // Theresienhöhe 11, 80339 Munich, Germany
// // { lat: 48.1341651, lng: 11.5464794 }
// // Europe/Berlin


// class SearchBar extends Component {

//   render() {
//     return (
//       <div >
//         {geocoding()}
//       </div>

//     )
//   }
// }

// export default SearchBar;

// // class SearchBar extends Component {
// //   render() {
// //     return (
// //       <div className="search-form-container">
// //         <div className="field">
// //           <label className="label">Name</label>
// //           <div className="control">
// //             <input className="input" type="text" placeholder="Text input" />
// //           </div>
// //         </div>

// //         <div className="field is-grouped">
// //           <div className="control">
// //             <button className="button is-link">Submit</button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // export default SearchBar;


