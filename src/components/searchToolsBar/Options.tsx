import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

export default function SearchBarOptions({
  value,
  setValue,
}: {
  value: string;
  setValue: any;
}) {
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row" color="white">
        <Radio colorScheme="gray" value="all">
          all
        </Radio>
        <Radio colorScheme="gray" value="title">
          title
        </Radio>
        <Radio colorScheme="gray" value="tags">
          tags
        </Radio>
      </Stack>
    </RadioGroup>
  );
}
