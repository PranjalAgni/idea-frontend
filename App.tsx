import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import congifureStore from "./src/store/configureStore";

export default function App() {
	const { store, persistor } = congifureStore();
	console.log("Hello world", store.getState());
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<View style={styles.container}>
					<Text>Open up App.tsx to start working on your app!</Text>
					<StatusBar style="auto" />
				</View>
			</PersistGate>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
