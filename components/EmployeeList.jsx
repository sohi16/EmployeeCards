import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import EmployeeCard from './EmployeeCard';
import managerData from '../Data/managers.json';

const EmployeeList = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error(error));
  }, []);

  const handleEmployeePress = (employee) => {
    navigation.navigate('EmployeeProfile', { employee, managerData, employees });
  };

  const renderEmployee = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleEmployeePress(item)}>
        <EmployeeCard employee={item} managerData={managerData.managers} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        renderItem={renderEmployee}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

export default EmployeeList;
