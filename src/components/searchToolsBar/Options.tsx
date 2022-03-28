import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function SearchBarOptions() {
  const [value, setValue] = useState("all");
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
