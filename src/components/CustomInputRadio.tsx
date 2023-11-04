import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

interface CustomInputRadioProps {
  options: string[];
  selected: string;
  onSelect: (text: string) => void;
}

export default function CustomInputRadio({ options, onSelect}: CustomInputRadioProps) {
  const [selected, setSelected] = useState(null);

  const selectHandler = (value) => {
    onSelect(value);
    setSelected(value);
  };
  
  return (
    <View style={styles.option}>
      {
        options.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={
                item === selected ? styles.selected : ''
              }
              onPress={() => selectHandler(item)}>
              <Text > {item}</Text>
            </Pressable>
          );
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  option: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 4,
    margin: 12,
  },
  selected: {
    backgroundColor: 'red',
    fontSize: 44,
  }
});
