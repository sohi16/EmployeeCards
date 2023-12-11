
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeProfile = ({ route }) => {
  const { employee, managerData, employees } = route.params;

  const otherEmployees = employees.filter(
    (emp) => emp.parentId === employee.parentId && emp.id !== employee.id
  );
   const getContrastColor = (hexColor) => {
    hexColor = hexColor.replace('#', '');

    // Convert hex to RGB
    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
  
    // Check if the color is white
    if (r === 255 && g === 255 && b === 255) {
      return '#000000'; // If background is white, set text color to black
    }
  
    // Calculate perceived brightness
    const perceivedBrightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    // Determine text color based on brightness
    return perceivedBrightness > 125 ? '##FFFFFF' : '#000000';
  };

  const textColor = getContrastColor(employee.backgroundColor);
  const getManagerName = (parentId) => {
    const manager = managerData.managers.find(manager => manager.id === parentId);
    return manager ? manager.name : 'No Manager';
  };
  const managerName = getManagerName(employee.parentId);
  return (
    <View style={[styles.card, { backgroundColor: employee.backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>Name: {employee.name}</Text>
      <Text style={[styles.text, { color: textColor }]}>Email: {employee.email}</Text >
      <Text style={[styles.text, { color: textColor }]}>Phone: {employee.phone}</Text>
      <Text style={[styles.text, { color: textColor }]}>Manager: {employee.parentId}</Text>
      <Text style={[styles.text, { color: textColor }]}>Manager Details:</Text>
      <Text style={[styles.text, { color: textColor }]}>Manager Name: {managerName}</Text>
      <Text style={[styles.text, { color: textColor }]}>Employees with the same Manager:</Text>
      {otherEmployees.map((emp) => (
        <Text key={emp.id} style={[styles.text, { color: textColor }]}>
          {emp.name}
        </Text>
      ))}
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
export default EmployeeProfile;
