import { useEffect, useState } from "react";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const storefrontGraphql = async (query) => {
  const URL = `https://${domain}/api/2021-07/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  const data = await fetch(URL, options)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.error(err);
      return "fail";
    });

  return data;
};

const useSingleProductData = (handle) => {
  const query = `
    {
      productByHandle(handle: "${handle}") {
          collections(first: 1) {
            edges {
            node {
              products(first: 5) {
                edges {
                  node {
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                    handle
                    title
                    id
                    images(first: 5) {
                      edges {
                        node {
                          originalSrc
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          }
        id
        title
        handle
        description
        vendor
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 5) {
          edges {
            node {
              sku
              image {
                originalSrc
                altText
              }
              title
              id
              priceV2 {
                amount
              }
            }
          }
        }
      }
    }`;

  const [state, setState] = useState({
    fetchStatus: "",
    product: {},
  });

  const fetchData = async () => {
    setState({
      fetchStatus: "loading",
      product: {},
    });

    const response = await storefrontGraphql(query);
    if (response === "fail") {
      setState({
        fetchStatus: "fail",
        product: {},
      });
      return;
    }

    const product = response.data.productByHandle ? response.data.productByHandle : [];
    setState({
      fetchStatus: "success",
      product,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return state;
};

export { useSingleProductData };
