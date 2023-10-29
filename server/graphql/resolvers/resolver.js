const mock = {
  id: "1543",
  title: "my sample title",
  subtitle: "sub title",
  description: "description",
  imageUrl: "http://image.com",
  link: "http://link.com",
  linkType: "EXTERNAL",
  order: 3,
  startedAt: 1453543543534,
  registeredAt: 345653654654,
  sampleItem: {
    productId: 1,
    quantity: 10,
    currency: "USD",
  },
};
export const resolvers = {
  Query: {
    specificBanner: (_root, args) => {
      const { id } = args;
      return {
        ...mock,
        id,
      };
    },
    banner: () => {
      return mock;
    },
    banners: () => {
      return [mock, mock, null];
    },
  },

  Banner: {
    id: (banner) => {
      // 요런식으로 각 프로퍼티에 대해 가공가능함
      return Number(banner.id);
    },
  },

  Item: {
    productId: (item) => {
      return `item-${item.productId}`;
    },
  },
};
