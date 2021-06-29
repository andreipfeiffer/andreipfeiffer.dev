import { Spacer } from "../spacer";
import { Text } from "../text";

type Props = {
  text: string;
};

export function Heading({ text }: Props) {
  return (
    <>
      <Spacer vertical="140" />
      <Text size="h02" as="p" color="muted">
        {text}
      </Text>
      <Spacer vertical="40" />
    </>
  );
}
