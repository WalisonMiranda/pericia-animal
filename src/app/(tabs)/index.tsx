import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 44, fontWeight: "700" }}>
                Home
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
