import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';

interface CustomInputTextProps {
  onChange: (text: string) => void;
  text: string;
  label: string;
}

export default function CustomInputText({ onChange, text, label }: CustomInputTextProps) {

  return (
      <SafeAreaView>
        <Text>{ label }</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={text}
        />
      </SafeAreaView>
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
