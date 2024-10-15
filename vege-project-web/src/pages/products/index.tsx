import axios from "axios";

import Layout from "@/components/molecular/Layout";
import Card from "@/components/atom/Card";
import { CardProps } from "@/lib/utils/interface";

function Products({ products }: any) {
  console.log("prod : ", products);
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-10">
        {products?.map((product: CardProps) => {
          return (
            <Card
              id={product?.id}
              key={product?.id}
              title={product?.title}
              description={product?.description}
              image_url={product?.image_url}
              price={product?.price}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("/api/vegetables/");
    return {
      props: {
        products: response.data,
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default Products;
