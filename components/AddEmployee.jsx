import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddEmployee = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddEmployee = () => {
   const newEmployee = {
      name,
      email,
      phone,
      };
    onAddEmployee(newEmployee);
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Phone"
        onChangeText={(text) => setPhone(text)}
        value={phone}
      />
      <Button title="Add Employee" onPress={handleAddEmployee} />
    </View>
  );
};

export default AddEmployee;
