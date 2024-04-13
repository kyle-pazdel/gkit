import { Center, Text, Image } from "@mantine/core";

export default function Home() {
  return (
    <Center>
      <Text c="white">geneva karr is trash.</Text>
      <Image
        alt="polaroid of geneva karr in 3/4 scope with her signature at the bottom"
        src="/geneva-karr.jpg"
        width="64"
        height="64"
      />
    </Center>
  );
}
