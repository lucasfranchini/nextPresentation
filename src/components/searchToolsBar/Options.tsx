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
      <Stack direction="row">
        <Radio value="all">all</Radio>
        <Radio value="title">title</Radio>
        <Radio value="tags">tags</Radio>
      </Stack>
    </RadioGroup>
  );
}
