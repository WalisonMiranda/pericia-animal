import React from 'react'
import { Text, StyleSheet } from 'react-native';

interface CustomInputRadioProps {
  options: string[];
  label: string;
  selected: string;
  onSelect: (text: string) => void;
}

export default function CustomInputRadio({ label, options, selected, onSelect}: CustomInputRadioProps) {
  return (
    <div>
      <Text>{ label }</Text>
      <input type="radio"
          style={styles.input}
          onSelect={onSelect}
          value={selected}
        />
    </div>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
