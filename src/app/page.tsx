import { Center, Text, Image, Flex } from "@mantine/core";
import { anton } from "./fonts";

export default function Home() {
  return (
    <Center m="xl" p="xl">
      <Flex justify="center" align="center" direction="column" gap="xl">
        <Text className={anton.className} c="white">
          geneva karr is trash.
        </Text>
        <Image
          alt="polaroid of geneva karr in 3/4 scope with her signature at the bottom"
          src="/geneva-karr.jpg"
          w={150}
          h={150}
        />
      </Flex>
    </Center>
  );
}
