import React, { useEffect, useState } from 'react';
import { View, Button } from 'react-native';
import managerData from '../Data/managers.json';

const SwitchView = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSwitchToList = () => {
    navigation.navigate('EmployeeList', { employees });
  };

  const handleSwitchToSingleCard = () => {
    if (employees.length > 0) {
      const employeeData = employees[0];
      navigation.navigate('EmployeeProfile', { employee: employeeData });
    }
  };

  return (
    <View>
      <Button title="Switch to List View" onPress={handleSwitchToList} />
      <Button title="Switch to Single Card View" onPress={handleSwitchToSingleCard} />
    </View>
  );
};

export default SwitchView;
