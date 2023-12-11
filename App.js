import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeProfile from './screens/EmployeeProfile';
import SwitchView from './screens/SwitchView';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import managerData from './Data/managers.json'

const Stack = createStackNavigator();

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [viewType, setViewType] = useState('list');
  useEffect(() => {

    fetch('https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmployeeList">
        <Stack.Screen
          name="SwitchView"
          component={SwitchView}
          initialParams={{ setViewType }}
        />
        <Stack.Screen
          name="EmployeeProfile"
          component={EmployeeProfile}
          options={({ route }) => ({ title: route.params.employee.name })}
        />
        <Stack.Screen
          name="EmployeeList"
          options={{ title: 'Employee List  (Click on card to view employee profile)' }}
        >
          {(props) => <EmployeeList {...props} employees={employees} />}
        </Stack.Screen>
        <Stack.Screen
          name="AddEmployee"
          options={{ title: 'Add Employee' }}
        >
          {(props) => <AddEmployee {...props} onAddEmployee={addEmployee} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
