import Head from "next/head";

import { Layout, SITE_TITLE } from "../components/layout";
import { Grid } from "../components/grid";
import { Text } from "../components/text";
import { Box } from "../components/box";
import { Flex } from "../components/flex";
import { Button } from "../components/button";
import { Spacer } from "../components/spacer";

import styles from "./style-guide.module.css";

export default function Talks() {
  return (
    <Layout>
      <Head>
        <title>Style Guide: {SITE_TITLE}</title>
      </Head>

      <Grid.Full>
        {renderHeading("Typography")}

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
        <br />

        <Text size="p02" as="p">
          <strong>p02 default paragraph text:</strong> Phasellus tempor ornare
          mauris quis venenatis. Maecenas eu ultrices est, eu tristique dui.
          Integer eget lacus neque. Duis at fringilla arcu. Pellentesque maximus
          pharetra dignissim. Suspendisse nec quam vel sapien accumsan
          ullamcorper. Vivamus ac suscipit quam, vitae auctor ex.
        </Text>

        <br />

        <Text size="p01" as="p">
          <strong>p01 larger text:</strong> Phasellus tempor ornare mauris quis
          venenatis. Maecenas eu ultrices est, eu tristique dui. Integer eget
          lacus neque. Duis at fringilla arcu. Pellentesque maximus pharetra
          dignissim. Suspendisse nec quam vel sapien accumsan ullamcorper.
          Vivamus ac suscipit quam, vitae auctor ex.
        </Text>

        <br />
        <br />

        <Text size="m01">m01 regular monospaced text</Text>
        <br />
        <Text size="m02">m02 smaller monospaced text</Text>

        {renderHeading("Colors")}

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

        <Box bg="inversed" padded="24">
          <Text size="h06" as="p">
            Inversed theme
          </Text>
          <Text size="m02" as="p" color="muted">
            Muted inversed text
          </Text>
        </Box>

        <br />

        <Box bg="primary" padded="24">
          <Text size="h06" as="p">
            Primary color background
          </Text>
          <Text size="m02" as="p" color="muted">
            Muted primary background text
          </Text>
        </Box>

        {renderHeading("Spacing")}

        <Flex type="inline">
          {renderPlaceholderHorizontal("x")}
          <Spacer horizontal="8" />
          {renderPlaceholderHorizontal("⬅ horizontal 8")}
          <Spacer horizontal="16" />
          {renderPlaceholderHorizontal("⬅ horizontal 16")}
          <Spacer horizontal="24" />
          {renderPlaceholderHorizontal("⬅ horizontal 24")}
          <Spacer horizontal="32" />
          {renderPlaceholderHorizontal("⬅ horizontal 32")}
        </Flex>

        <br />

        {renderPlaceholderVertical("⬇ vertical 8")}
        <Spacer vertical="8" />
        {renderPlaceholderVertical("⬇ vertical 16")}
        <Spacer vertical="16" />
        {renderPlaceholderVertical("⬇ vertical 24")}
        <Spacer vertical="24" />
        {renderPlaceholderVertical("⬇ vertical 32")}
        <Spacer vertical="32" />
        {renderPlaceholderVertical("⬇ vertical 40")}
        <Spacer vertical="40" />
        {renderPlaceholderVertical("⬇ vertical 60")}
        <Spacer vertical="60" />
        {renderPlaceholderVertical("⬇ vertical 80")}
        <Spacer vertical="80" />
        {renderPlaceholderVertical("⬇ vertical 100")}
        <Spacer vertical="100" />
        {renderPlaceholderVertical()}

        {renderHeading("Layout")}

        <Flex type="inline" gap="24">
          <Text size="h06">Inlined</Text>
          <Text size="h06">elements</Text>
          <Text size="h06">with</Text>
          <Text size="h06">constant</Text>
          <Text size="h06">gap</Text>
        </Flex>

        <br />
        <br />

        <Flex type="stack" gap="24">
          <Text size="h06" as="p">
            Stacked
          </Text>
          <Text size="h06" as="p">
            elements
          </Text>
          <Text size="h06" as="p">
            with
          </Text>
          <Text size="h06" as="p">
            constant
          </Text>
          <Text size="h06" as="p">
            gap
          </Text>
        </Flex>
      </Grid.Full>

      <br />

      <Grid.Full>{renderPlaceholderVertical("Full")}</Grid.Full>

      <Grid>
        <Grid.Col span={12}>{renderPlaceholderVertical("12")}</Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={6}>{renderPlaceholderVertical("6")}</Grid.Col>
        <Grid.Col span={6}>{renderPlaceholderVertical("6")}</Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={5}>{renderPlaceholderVertical("5")}</Grid.Col>
        <Grid.Col span={7}>{renderPlaceholderVertical("7")}</Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={4}>{renderPlaceholderVertical("4")}</Grid.Col>
        <Grid.Col span={8}>{renderPlaceholderVertical("8")}</Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={4}>{renderPlaceholderVertical("4")}</Grid.Col>
        <Grid.Col span={4}>{renderPlaceholderVertical("4")}</Grid.Col>
        <Grid.Col span={4}>{renderPlaceholderVertical("4")}</Grid.Col>
      </Grid>

      <Grid.Full>
        {renderHeading("Interactive elements")}

        <a href="/">Links are underlined, with inherited color</a>

        <br />
        <br />

        <Button href="/">Button link</Button>
      </Grid.Full>
    </Layout>
  );

  function renderPlaceholderVertical(content: string = "placeholder") {
    return (
      <Box bg="inversed" padded="8">
        <Text size="h06" as="p">
          {content}
        </Text>
      </Box>
    );
  }

  function renderPlaceholderHorizontal(content: string = "placeholder") {
    return (
      <Box bg="inversed" padded="8">
        <Text size="h06" as="p">
          {content}
        </Text>
      </Box>
    );
  }

  function renderHeading(text: string) {
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
}
