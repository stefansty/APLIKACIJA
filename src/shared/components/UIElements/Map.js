import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = props => {
  const mapRef = useRef();
  
  const { center, zoom } = props;

  useEffect(() => {
    new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM()
        })
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom
      })
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;


/*
DA SE RAZUMEMO OVO NIJE URADJENO KAKO TREBA SAMO JE STAVLJENO DA BI RADILA MAPA INACE NE RAZUMEM OVO GORE SKORO NISTA A I DRUGACIJI JE NACIN POSTAVLJANJA I POTREBAN JE GOOGLE ACC SA PAYMANT CARTICOM STO JA NEMAM....



*/