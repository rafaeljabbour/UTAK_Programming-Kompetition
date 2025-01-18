import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { COLORS, SIZES } from '../constants';

export default function DropdownMenu() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [patientCount, setPatientCount] = useState(0);

  const wardPatientCount = {
    ICU: 20,
    HDU: 15,
    'Buffer Ward': 10,

  };

  const handleValueChange = (value) => {
    setSelectedValue(value);
    if (value) {
      setPatientCount(wardPatientCount[value]);
    } else {
      setPatientCount(0);
    }
    console.log("Selected value: ", value);
  };

  const items = [
    { label: 'ICU', value: 'ICU' },
    { label: 'HDU', value: 'HDU' },
    { label: 'Buffer Ward', value: 'Buffer Ward' },
  ];

  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={handleValueChange}
        items={items}
        style={{
          inputIOS: pickerSelectStyles.inputIOS,
          iconContainer: pickerSelectStyles.iconContainer,
        }}
        Icon={() => {
          return <Image source={require('../assets/images/Icon.png')} style={styles.icon} />;
        }}
        placeholder={{ label: 'Select a ward', value: null }}
      />
      {selectedValue!==null && (
        <Text style={styles.patientCountText}>
            {patientCount} patients
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  patientCountText: {
    fontSize: 14,
    color: COLORS.thatBlue,
    alignSelf: 'flex-start',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 12,

    color: 'black',
    paddingRight: 20, 
    backgroundColor: 'white',
    alignItems: 'center',
  },
  iconContainer: {
    top: 13,
    right: 25,
    alignItems: 'center',
  },
});
