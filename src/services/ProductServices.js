export const groupProductsByCategory = (products) =>
  products
    .filter((product) => {
      if (product.id === "prod_nPEVlNQY3A5a7d") return false;
      else return true;
    })
    .reduce((acc, d) => {
      if (d.categories.length < 1)
        acc.push({ id: "NoID", name: "Autres", data: [d] });
      else {
        const found = acc.find((a) => a.id === d.categories[0].id);
        if (!found)
          acc.push({
            id: d.categories[0].id,
            name: d.categories[0].name,
            data: [d],
          });
        else found.data.push(d);
      }
      return acc;
    }, []);
