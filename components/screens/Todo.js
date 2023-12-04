import { View, Text, StyleSheet } from "react-native"

export default function TodosScreen() {
    return (
        <View style={styles.root}>
            <Text>This is The TODOs Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#ff0',
        flex: 1
    }
})