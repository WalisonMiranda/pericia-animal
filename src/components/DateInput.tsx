import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateInput = ({ mode, onChange }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // Feche o picker automaticamente no iOS
    setDate(currentDate);
    onChange(currentDate);
  };

  return (
    <View>
      <Button title="Open Date Picker" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode={mode}
          display="default"
          onChange={onDateChange}
        />
      )}
    </View>
  );
};

export default DateInput;
