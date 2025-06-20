import { Slot } from "expo-router";
import { ClerkProvider } from '@clerk/clerk-expo'
import SafeScreen from "../components/SafeScreen";
import { tokenCache } from '@clerk/clerk-expo/token-cache'

export default function RootLayout() {
  return (
    <SafeScreen>
      <ClerkProvider tokenCache={tokenCache} >
        <Slot />
      </ClerkProvider>
    </SafeScreen>
  );
}


