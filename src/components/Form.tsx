import React, { useState } from 'react';
import { View, Text, TextInput, RadioInput, ScrollView, Button } from 'react-native';

import DateInput from './DateInput';

import { ItemProps } from './Item';

interface FormProps {
  item: ItemProps;
}

const Form: React.FC<FormProps> = ({ item }) => {
  const [formData, setFormData] = useState<ItemProps>(item);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   selectedDate1: new Date(),
  //   selectedDate2: new Date(),
  //   selectedDate3: new Date(),
  // });

  const handleDateChange = (field, date) => {
    setFormData({ ...formData, [field]: date });
  };

  const handleRadioChange = (field: keyof ItemProps, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleTextareaChange = (field: keyof ItemProps, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <ScrollView>
      <View>
        <Text>Denuntiation Date:</Text>
        <DateInput
          mode="date"
          onChange={(date) => handleDateChange('selectedDate2', date)}
        />
      </View>

      {/* Repita o código acima para os outros campos de data e hora, se necessário */}

      <View>
        <Text>Accused Name:</Text>
        <TextInput
          value={formData.accused_name}
          onChangeText={(text) => setFormData({ ...formData, accused_name: text })}
        />
      </View>

      {/* Repita o código acima para os outros campos de entrada de texto */}

      <View>
        <Text>Animal Observations:</Text>
        <TextInput
          multiline
          value={formData.animal_observations}
          onChangeText={(text) => handleTextareaChange('animal_observations', text)}
        />
      </View>

      {/* Repita o código acima para os outros campos de observações, se necessário */}

      <View>
        <Text>Has Fresh Water?</Text>
        <RadioInput
          options={['Sim', 'Não']}
          selected={formData.has_fresh_water}
          onSelect={(value) => handleRadioChange('has_fresh_water', value)}
        />
      </View>

      {/* Repita o código acima para os outros campos de entrada de rádio */}

      {/* Adicione mais campos conforme necessário */}

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default Form;
