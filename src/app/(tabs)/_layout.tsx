import { Tabs } from "expo-router";

export default function TabRoutesLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Início" }} />
            <Tabs.Screen name="profile" options={{ title: "Perfil" }} />
        </Tabs>
    )
}