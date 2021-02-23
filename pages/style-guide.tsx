import Layout from "../components/layout";
import { Grid } from "../components/grid";
import { Text } from "../components/text";
import { Box } from "../components/box";
import styles from "./style-guide.module.css";

export default function Talks() {
  return (
    <Layout>
      <Grid.Full>
        <Text size="h05" as="div" color="primary">
          Typography
        </Text>
        <br />

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

        <Text size="p02" as="p">
          <strong>p02 default paragraph text:</strong> Phasellus tempor ornare
          mauris quis venenatis. Maecenas eu ultrices est, eu tristique dui.
          Integer eget lacus neque. Duis at fringilla arcu. Pellentesque maximus
          pharetra dignissim. Suspendisse nec quam vel sapien accumsan
          ullamcorper. Vivamus ac suscipit quam, vitae auctor ex.
        </Text>

        <Text size="p01" as="p">
          <strong>p01 larger text:</strong> Phasellus tempor ornare mauris quis
          venenatis. Maecenas eu ultrices est, eu tristique dui. Integer eget
          lacus neque. Duis at fringilla arcu. Pellentesque maximus pharetra
          dignissim. Suspendisse nec quam vel sapien accumsan ullamcorper.
          Vivamus ac suscipit quam, vitae auctor ex.
        </Text>

        <Text size="m01">m01 regular monospaced text</Text>
        <br />
        <Text size="m02">m02 smaller monospaced text</Text>
        <br />
        <Text size="m03">m03 tiny monospaced text</Text>

        <br />
        <br />

        <a href="/">Links are underlined, without special color</a>

        <br />
        <br />
        <br />
        <Text size="h05" as="div" color="primary">
          Colors
        </Text>

        <br />

        <div className={styles.colors_wrapper}>
          <div className={styles.color_primary}>
            <Text size="h06" as="div">
              Primary
            </Text>
          </div>
          <div className={styles.color_dark}>
            <Text size="h06" as="div">
              Dark
            </Text>
          </div>
          <div className={styles.color_light}>
            <Text size="h06" as="div">
              Light
            </Text>
          </div>
        </div>

        <br />
        <Text size="m02" as="p" color="muted">
          Muted text
        </Text>
        <br />

        <Box bg="inversed" className={styles.padded}>
          <Text size="h06" as="span">
            Inversed theme
          </Text>
          <br />
          <Text size="m02" as="span" color="muted">
            Muted inversed text
          </Text>
        </Box>

        <br />

        <Box bg="primary" className={styles.padded}>
          <Text size="h06" as="span">
            Primary color background
          </Text>
          <br />
          <Text size="m02" as="span" color="muted">
            Muted primary background text
          </Text>
        </Box>
      </Grid.Full>
    </Layout>
  );
}
