import { View, Text } from 'react-native';

import Form from '../../components/Form';

export default function ExpertiseForm() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 44, fontWeight: "700" }}>
            Formulário Form
        </Text>
        <Form />
    </View>
  );
}