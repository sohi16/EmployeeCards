import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeCard = ({ employee, managerData }) => {
  
  const getContrastColor = (hexColor) => {
    hexColor = hexColor.replace('#', '');

  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

 const perceivedBrightness = (r * 299 + g * 587 + b * 114) / 1000;
if (perceivedBrightness <= 125) {
    return '#FFFFFF'; 
  } else if (hexColor.toUpperCase() === '000000') { 
    return '#AAAAAA'; 
  } else {
    return '#000000';
  }
  };

  const textColor = getContrastColor(employee.backgroundColor);

  const manager = managerData.find(manager => manager.id === employee.parentId);

  return (
    <View style={[styles.card, { backgroundColor: employee.backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>{`Name: ${employee.name}`}</Text>
      <Text style={[styles.text, { color: textColor }]}>{`Email: ${employee.email}`}</Text>
      <Text style={[styles.text, { color: textColor }]}>{`Phone: ${employee.phone}`}</Text>
      {manager && (
        <Text style={[styles.text, { color: textColor }]}>{`Reporting Manager: ${manager.name}`}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },

});

export default EmployeeCard;
