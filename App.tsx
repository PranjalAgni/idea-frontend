import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import congifureStore from "./src/store/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/Home/Home";
import { SignUpScreen } from "./src/screens/Signup/Signup";
import { LogInScreen } from "./src/screens/Login/Login";

export default function App() {
	const { store, persistor } = congifureStore();
	const Stack = createNativeStackNavigator();

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Signup" component={SignUpScreen} />
						<Stack.Screen name="Login" component={LogInScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
