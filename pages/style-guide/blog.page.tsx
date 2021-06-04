import { BlogPost } from "../../components/blog/blog_post";
import { Subheading } from "../../components/blog/subheading";
import { Note } from "../../components/blog/note";
import { Fullpage } from "../../components/blog/fullpage";
import { Tag } from "../../components/blog/tag";
import { Grid } from "../../components/grid";
import { Flex } from "../../components/flex";
import { Text } from "../../components/text";
import { Figure } from "../../components/blog/figure";

export default function BlogPostPreview() {
  return (
    <BlogPost
      meta={{
        title: "Blog post with a pretty long title on more than one line",
        date: "2020-12-22",
        tags: ["javascript", "css"],
        cover: undefined,
        isArchived: false,
        isPublished: false,
        intro: "",
      }}
    >
      <>
        <p>Regular short paragraph.</p>
        <p>
          Regular very long paragraph that should not fit on a single line
          because this is very long indeed and it shouldn't fit on one line as I
          said.
        </p>
        <p>
          Another paragraph with <code>some js code</code> inside and some more{" "}
          <code>Code With LARGE</code> chars.
        </p>

        <h2 id="heading2">
          Heading 2, with some more text with to go on second line
          <Headinglink id="heading2" />
        </h2>
        <p>Content after heading.</p>

        <h3 id="heading3">
          Heading 3, with some more text to go on second line
          <Headinglink id="heading3" />
        </h3>
        <p>Content after heading.</p>

        <h4 id="heading4">
          Heading 4, with some more text to go on second line
          <Headinglink id="heading4" />
        </h4>
        <p>Content after heading.</p>

        <Subheading>Subheading</Subheading>
        <p>
          Content after subheading has a negative margin, pulling it more
          towards the subheading.
        </p>

        <Subheading uppercase>Uppercase subheading</Subheading>
        <p>
          Content after subheading has a negative margin, pulling it more
          towards the subheading.
        </p>

        <h2>
          Heading 2, with <code>code</code> and some more <code>code</code> text
          with <code>code</code> to go on second line
        </h2>
        <h3>
          Heading 3, with <code>code</code> and some more <code>code</code> text
          to go on second line with <code>code</code>
        </h3>
        <h4>
          Heading 4, with <code>code</code> and some more <code>code</code> text
          to go on second line with <code>code</code>
        </h4>

        <p>
          <strong>Unordered lists:</strong>
        </p>
        <ul>
          <li>
            very long list item that should not fit on a single line because
            this is very long indeed and it shouldn't fit on one line as I said
          </li>
          <li>
            another very long list item that should not fit on a single line
            because this is very long indeed and it shouldn't fit on one line as
            I said
          </li>
          <li>short list item, on one line</li>
          <li>
            and a nested list:
            <ul>
              <li>short list item, on one line</li>
              <li>another short list item</li>
              <li>
                very long list item that should not fit on a single line because
                this is very long indeed and it shouldn't fit on one line as I
                said
              </li>
            </ul>
          </li>
        </ul>

        <br />

        <p>
          <strong>Ordered lists:</strong>
        </p>
        <ol>
          <li>
            very long list item that should not fit on a single line because
            this is very long indeed and it shouldn't fit on one line as I said
          </li>
          <li>
            another very long list item that should not fit on a single line
            because this is very long indeed and it shouldn't fit on one line as
            I said
          </li>
          <li>short list item, on one line</li>
          <li>
            and a nested list:
            <ol>
              <li>short list item, on one line</li>
              <li>another short list item</li>
              <li>
                very long list item that should not fit on a single line because
                this is very long indeed and it shouldn't fit on one line as I
                said
              </li>
            </ol>
          </li>
        </ol>

        <hr />

        <blockquote>Block quote single line</blockquote>

        <blockquote>
          Block quote on multiple lines because we need to accommodate this as
          well
        </blockquote>

        <Note>Some important facts</Note>
        <Note title="Custom title">
          We can pass a custom title to be customizable. However, the color is
          currently only the yellow primary one, without any way to change it.
        </Note>

        <Fullpage>
          <Img body="Full page width content" />
        </Fullpage>

        <br />

        <Fullpage padded>
          <Img body="Full page content slightly padded" />
        </Fullpage>

        <br />

        <Fullpage>
          <Grid.Full>
            <Img body="Full grid content can be composed also" />
          </Grid.Full>
        </Fullpage>

        <Figure caption="Content width figure caption">
          <Img body="Content width figure" />
        </Figure>

        <Figure width="grid" caption="Grid width figure caption">
          <Img body="Grid width figure" />
        </Figure>

        <Figure width="page" caption="Page width figure caption">
          <Img body="Page width figure" />
        </Figure>

        <Figure background>
          <Text>Figure with default background</Text>
        </Figure>

        <Figure background="#fbc311aa">
          <Text>Figure with custom background</Text>
        </Figure>

        <Flex type="stack" gap="8">
          <Tag tag="html" />
          <Tag tag="css" />
          <Tag tag="javascript" />
          <Tag tag="typescript" />
          <Tag tag="react" />
          <Tag tag="react_native" />
          <Tag tag="code_design" />
          <Tag tag="ui_development" />
        </Flex>
      </>
    </BlogPost>
  );
}

function Headinglink({ id }: { id: string }) {
  return (
    <a href={`#${id}`} aria-hidden="true" tabIndex={-1}>
      <span className="headinglink"></span>
    </a>
  );
}

function Img({ body }: { body: string }) {
  return (
    <div
      style={{
        backgroundColor: "#88888844",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p>{body}</p>
    </div>
  );
}
