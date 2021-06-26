import React from "react";

import { Layout } from "../../components/layout";
import { Grid } from "../../components/grid";
import { Text } from "../../components/text";
import { Box } from "../../components/box";
import { Flex } from "../../components/flex";
import { Button } from "../../components/button";
import { Spacer } from "../../components/spacer";
import { Arrow } from "../../components/arrow";
import { Heading } from "../../components/style-guide/heading";

import styles from "./style-guide.module.css";

export default function Talks() {
  return (
    <Layout>
      <Grid.Full>
        <Heading text="Typography" />

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

        <Heading text="Colors" />

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

        <Heading text="Spacing" />

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
        {renderPlaceholderVertical("⬇ vertical 120")}
        <Spacer vertical="120" />
        {renderPlaceholderVertical("⬇ vertical 140")}
        <Spacer vertical="140" />
        {renderPlaceholderVertical()}

        <Heading text="Layout" />

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

      <Grid>
        <Grid.Col span={6}>
          <Flex type="inline" gap="24" align="start">
            <Text size="h06" as="p">
              align <br /> align
            </Text>
            <Text size="h06" as="p">
              start
            </Text>
          </Flex>

          <br />

          <Flex type="inline" gap="24" align="center">
            <Text size="h06" as="p">
              align <br /> align
            </Text>
            <Text size="h06" as="p">
              center
            </Text>
          </Flex>

          <br />

          <Flex type="inline" gap="24" align="end">
            <Text size="h06" as="p">
              align <br /> align
            </Text>
            <Text size="h06" as="p">
              end
            </Text>
          </Flex>

          <br />

          <Flex type="inline" gap="24" justify="start">
            <Text size="h06" as="p">
              justify
            </Text>
            <Text size="h06" as="p">
              start
            </Text>
          </Flex>

          <br />

          <Flex type="inline" gap="24" justify="center">
            <Text size="h06" as="p">
              justify
            </Text>
            <Text size="h06" as="p">
              center
            </Text>
          </Flex>

          <br />

          <Flex type="inline" gap="24" justify="end">
            <Text size="h06" as="p">
              justify
            </Text>
            <Text size="h06" as="p">
              end
            </Text>
          </Flex>

          <br />

          <Flex type="inline" gap="24" justify="space-between">
            <Text size="h06" as="p">
              justify
            </Text>
            <Text size="h06" as="p">
              space-between
            </Text>
          </Flex>
        </Grid.Col>
      </Grid>

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
        <Heading text="Interactive elements" />

        <a href="/">Links are underlined, with inherited color</a>

        <br />
        <br />

        <Flex type="inline">
          <Button onClick={() => alert("clicked")}>Button</Button>

          <Button as="a" href="/">
            Link (pq) button
          </Button>

          <Button onClick={() => alert("clicked")}>
            <Text size="h06" as="div">
              Custom
            </Text>
          </Button>

          <Button onClick={() => alert("clicked")} bg="muted">
            Muted
          </Button>
        </Flex>

        <br />

        <Flex type="inline">
          <Button size="large" onClick={() => alert("clicked")}>
            Large button
          </Button>

          <Button size="large" onClick={() => alert("clicked")}>
            <Text size="h05" as="div">
              Custom large
            </Text>
            <Spacer horizontal="16" />
            <Arrow />
          </Button>

          <Button size="large" onClick={() => alert("clicked")}>
            <Arrow />
          </Button>

          <Button
            size="large"
            onClick={() => alert("clicked")}
            direction="left"
          >
            <Arrow direction="left" />
          </Button>
        </Flex>
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
}
