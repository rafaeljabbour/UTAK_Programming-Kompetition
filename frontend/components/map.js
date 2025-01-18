import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
//This is the access token for the map box api
mapboxgl.accessToken = 'pk.eyJ1IjoicmFsZHV0ZWsiLCJhIjoiY202MmR5MDViMHlmMjJucG5mcWw4emo4ZSJ9.Ox0uAsJ9O66fBpsEUOMXlw';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null); 
  const [markerPosition, setMarkerPosition] = useState({ lng: -74.5, lat: 40 }); // Marker position

  useEffect(() => {
    // Create the map using the mapbox api
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [markerPosition.lng, markerPosition.lat],
      zoom: 9,
    });

    // Creating a marker that the user can drag to places on the map
    const marker = new mapboxgl.Marker({ draggable: true })
      .setLngLat([markerPosition.lng, markerPosition.lat])
      .addTo(map.current);

    // Update the position of the marker based on where the user drags it to
    marker.on('dragend', () => {
      const lngLat = marker.getLngLat();
      setMarkerPosition({ lng: lngLat.lng, lat: lngLat.lat });
    });

    return () => map.current.remove(); // Cleanup map instance on unmount
  }, []);

  const handleReportDamage = async () => {
    console.log(`Reporting damage at: ${markerPosition.lng}, ${markerPosition.lat}`);

    try {
      const response = await fetch('/api/report-damage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(markerPosition),
      });

      const data = await response.json();
      alert('Damage reported successfully!');
    } catch (error) {
      console.error('Error reporting damage:', error);
    }
  };

  return (
    <div>
      <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />
      <button onClick={handleReportDamage} style={{ marginTop: '20px' }}>
        Report Damage
      </button>
    </div>
  );
};

export default Map;