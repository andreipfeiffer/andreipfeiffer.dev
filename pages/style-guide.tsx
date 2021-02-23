import Layout from "../components/layout";
import { Grid } from "../components/grid";
import { Text } from "../components/text";

export default function Talks() {
  return (
    <Layout>
      <Grid.Full>
        <Text size="h00" as="h1">
          h00 largest heading
        </Text>
        <br />
        <Text size="h01" as="h1">
          h01 heading, usually h1
        </Text>
        <br />
        <Text size="h02" as="h2">
          h02 heading, usually h2
        </Text>
        <br />
        <Text size="h02_5" as="h2">
          h02.5 heading, h2 alternative
        </Text>
        <br />
        <Text size="h03" as="h3">
          h03 heading, usually h3
        </Text>
        <br />
        <Text size="h04" as="h4">
          h04 small heading
        </Text>
        <br />
        <Text size="h05" as="h5">
          h05 small uppercase heading
        </Text>
        <br />
        <Text size="h06" as="h6">
          h06 tiny uppercase heading
        </Text>
        <br />

        <Text size="p02">
          <strong>p02 default paragraph text:</strong> Phasellus tempor ornare
          mauris quis venenatis. Maecenas eu ultrices est, eu tristique dui.
          Integer eget lacus neque. Duis at fringilla arcu. Pellentesque maximus
          pharetra dignissim. Suspendisse nec quam vel sapien accumsan
          ullamcorper. Vivamus ac suscipit quam, vitae auctor ex.
        </Text>

        <Text size="p01">
          <strong>p01 larger text:</strong> Phasellus tempor ornare mauris quis
          venenatis. Maecenas eu ultrices est, eu tristique dui. Integer eget
          lacus neque. Duis at fringilla arcu. Pellentesque maximus pharetra
          dignissim. Suspendisse nec quam vel sapien accumsan ullamcorper.
          Vivamus ac suscipit quam, vitae auctor ex.
        </Text>
        <br />

        <Text size="m01" as="div">
          m01 regular monospaced text
        </Text>
        <br />
        <Text size="m02" as="div">
          m02 smaller monospaced text
        </Text>
        <br />
        <Text size="m03" as="div">
          m03 tiny monospaced text
        </Text>
      </Grid.Full>
    </Layout>
  );
}
