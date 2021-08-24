import { useEffect, useState } from "react";
import { withLayout } from "../layout/Layout/Layout";
import { Htag, Button, P, Tag, Rating } from "../components";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <P size="large">
        Large Large Large Large Large Large Large Large Large Large{" "}
      </P>
      <P size="medium">
        Medium Medium Medium Medium Medium Medium Medium Medium Medium Medium{" "}
      </P>
      <P size="small">
        Small Small Small Small Small Small Small Small Small Small{" "}
      </P>

      <Tag size="large">Large</Tag>
      <Tag size="medium">Medium</Tag>
      <Tag size="medium" color="ghost">
        Ghost
      </Tag>
      <Tag size="medium" color="primary">
        Primary
      </Tag>
      <Tag size="medium" color="grey">
        Grey
      </Tag>
      <Tag color="red">Red</Tag>
      <Tag color="green">Green</Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
}

export default withLayout(Home);
