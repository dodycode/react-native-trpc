import { api } from "@/utils/api";
import { Text, View } from "react-native";

export default function Index() {
  const { data } = api.post.hello.useQuery();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{data?.message}</Text>
    </View>
  );
}
