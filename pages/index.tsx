import { useState } from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { withLayout } from "../layout/Layout/Layout";

import { Htag, Button, P, Tag, Rating } from "../components";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
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
        0 Small Small Small Small Small Small Small Small Small Small{" "}
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

      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
