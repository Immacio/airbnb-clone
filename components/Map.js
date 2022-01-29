import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'

function Map({ searchResults }) {
  // Destructure the searchResults object into its key:value pairs
  const [selectedLocation, setSelectedLocation] = useState({})

  // Transforms the coordinates from the JSON API file to an object that returns readable longitude and laitude values used for MapBox.
  const coordinates = searchResults.map((results) => ({
    longitude: results.long,
    latitude: results.lat,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewPort] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/immacio/ckyyphan3000d14qmm8o385kk"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResults.map((results) => (
        <div key={results.long}>
          <Marker
            longitude={results.long}
            latitude={results.lat}
            offsetTop={-10}
            offsetLeft={-20}
          >
            <p
              onClick={() => setSelectedLocation(results)}
              className="animate-bounce cursor-pointer text-2xl"
              aria-label="push-pin"
              role="img"
            >
              📌
            </p>
          </Marker>

          {/* Popup for the selected marker */}
          {/* Since we are using the longitude as the key for the location - we
          check if the selectedLocation from useState is the same as the
          returned object */}

          {selectedLocation.long === results.long ? (
            // Place the popup at the exact coordinates as the pin.
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})} // Reset the state variable to an empty object
              latitude={results.lat}
              longitude={results.long}
              className="rounded-full"
            >
              <div className="h-48 w-80">
                <Image
                  className="h-48 w-80"
                  layout="fill"
                  src={results.img}
                  objectFit="cover"
                />
              </div>
              <div className="absolute top-[45%] w-1/2 rounded-md bg-black py-2 pl-3 text-white opacity-80">
                <h1 className="text-sm font-semibold">{results.title}</h1>
                <h3 className="text-lg font-bold">{results.price}</h3>
                <p className="flex items-center text-sm">
                  <StarIcon className=" h-5 pr-1" />
                  {results.star}
                </p>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
