import { TRPCProvider } from "@/utils/api";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <TRPCProvider>
      <Stack />
    </TRPCProvider>
  );
}
