import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomAlert from '../components/addPatient'; 
import CustomHeader from '../components/customHeaderPL';
import CustomFooter from '../components/navbarPL';
import { COLORS } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {HorizontalLineList} from '../components/scrollableList';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFsZHV0ZWsiLCJhIjoiY202MmR5MDViMHlmMjJucG5mcWw4emo4ZSJ9.Ox0uAsJ9O66fBpsEUOMXlw';

const Citizen = () => {

    const [markerPosition, setMarkerPosition] = useState({ lng: -74.5, lat: 40 }); // Default marker position

    useEffect(() => {
      // Initialize the map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // Mapbox style
        center: [markerPosition.lng, markerPosition.lat],
        zoom: 9,
      });
  
      // Add a draggable marker
      const marker = new mapboxgl.Marker({ draggable: true })
        .setLngLat([markerPosition.lng, markerPosition.lat])
        .addTo(map.current);
  
      // Update marker position on drag end
      marker.on('dragend', () => {
        const lngLat = marker.getLngLat();
        setMarkerPosition({ lng: lngLat.lng, lat: lngLat.lat });
      });
  
      return () => map.current.remove(); // Clean up map instance on unmount
    }, []);
  
    const handleReportDamage = async () => {
      console.log(`Reporting damage at: Longitude: ${markerPosition.lng}, Latitude: ${markerPosition.lat}`);
  
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
        alert('Failed to report damage.');
      }
    };
  
    return (
      <View style={styles.container}>
        <CustomHeader />
        <View ref={mapContainer} style={styles.map} />
        <TouchableOpacity style={styles.button} onPress={handleReportDamage}>
          <Ionicons name="alert-circle-outline" size={20} color="white" />
          <Text style={styles.buttonText}>Report Damage</Text>
        </TouchableOpacity>
        <CustomFooter />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    map: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height * 0.75, // Adjust map height
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.primary,
      padding: 15,
      margin: 10,
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      marginLeft: 8,
    },
  });
  
  export default Citizen;