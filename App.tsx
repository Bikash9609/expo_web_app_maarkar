import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";
import { SafeAreaView, ActivityIndicator, Alert, Text } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import { View } from "./components/Themed";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  return (
    <NativeBaseProvider>
      <Box safeAreaTop>
        <StatusBar />
        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
          {error ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Oops, some error occurred!</Text>
            </View>
          ) : (
            <WebView
              // cacheEnabled
              // domStorageEnabled
              // geolocationEnabled
              // onLoadStart={() => setLoading(true)}
              // onLoadEnd={() => setLoading(false)}
              style={{ flex: 1, height: "100%", width: "100%" }}
              source={{ uri: "https://www.app.maarkar.in/" }}
              // showsVerticalScrollIndicator={false}
              // onError={(e) => {
              //   console.log(e);
              //   setError({ message: "Error" });
              //   Alert.alert(
              //     "Error",
              //     "Some error occurred! Please restart the app!",
              //     undefined,
              //     { cancelable: false, onDismiss: () => {} }
              //   );
              // }}
              // hideKeyboardAccessoryView
            />
          )}
          {(loading || error) && (
            // <Box
            //   flex={1}
            //   position={"absolute"}
            //   top="0"
            //   left="0"
            //   w="full"
            //   h="full"
            //   bgColor={"white"}
            // >
            <ActivityIndicator color={"red"} />
            // </Box>
          )}
        </SafeAreaView>
      </Box>
    </NativeBaseProvider>
  );
}
