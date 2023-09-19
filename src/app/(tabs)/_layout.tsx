import { Tabs } from "expo-router";

export default function TabRoutesLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Início" }} />
            <Tabs.Screen name="expertiseForm" options={{ title: "Formulário" }} />
        </Tabs>
    )
}