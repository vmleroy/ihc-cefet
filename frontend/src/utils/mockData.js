export const postMock = [
  {
    _id: 1,
    user: {
      _id: 1,
      name: "John Doe",
      username: "johndoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    likes: [
      {
        user: {
          __id: 1,
          name: "John Doe",
          username: "johndoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
      },
      {
        user: {
          __id: 2,
          name: "Jane Doe",
          username: "janedoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
      },
      {
        user: {
          __id: "64820c03da396d1a002e536a",
          email: "victor.leroy@email.com",
          password: "654321",
          name: "Victor Le Roy",
          profilePictureSrc: null,
          bannerImageSrc: null,
          friends: [],
          friendRequests: [],
          createdAt: 1686244355245,
          updatedAt: 1686244355245,
        },
      },
    ],
    comments: [
      {
        index: 1,
        user: {
          _id: 1,
          name: "John Doe",
          username: "johndoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        likes: [
          {
            user: {
              _id: 2,
              name: "Jane Doe",
              username: "janedoe",
              profilePictureSrc: "https://picsum.photos/200",
            },
          },
        ],
      },
    ],
    timestamp: "2021-08-01T00:00:00.000Z",
  },
  {
    _id: 3,
    user: {
      _id: 2,
      name: "Jane Doe",
      username: "janedoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imageSrc: "https://picsum.photos/200",
    likes: [
      {
        user: {
          _id: 1,
          name: "John Doe",
          username: "johndoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
      },
      {
        user: {
          _id: 2,
          name: "Jane Doe",
          username: "janedoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
      },
    ],
    comments: [
      {
        index: 1,
        user: {
          _id: 1,
          name: "John Doe",
          username: "johndoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        likes: [
          {
            user: {
              _id: 2,
              name: "Jane Doe",
              username: "janedoe",
              profilePictureSrc: "https://picsum.photos/200",
            },
          },
        ],
      },
    ],
    timestamp: "2021-08-01T00:00:00.000Z",
  },
  {
    _id: 4,
    user: {
      _id: 1,
      name: "John Doe",
      username: "johndoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    likes: [
      {
        user: {
          __id: 1,
          name: "John Doe",
          username: "johndoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
      },
      {
        user: {
          __id: 2,
          name: "Jane Doe",
          username: "janedoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
      },
      {
        user: {
          __id: "64820c03da396d1a002e536a",
          email: "victor.leroy@email.com",
          password: "654321",
          name: "Victor Le Roy",
          profilePictureSrc: null,
          bannerImageSrc: null,
          friends: [],
          friendRequests: [],
          createdAt: 1686244355245,
          updatedAt: 1686244355245,
        },
      },
    ],
    comments: [
      {
        index: 1,
        user: {
          _id: 1,
          name: "John Doe",
          username: "johndoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        likes: [
          {
            user: {
              _id: 2,
              name: "Jane Doe",
              username: "janedoe",
              profilePictureSrc: "https://picsum.photos/200",
            },
          },
        ],
      },
    ],
    timestamp: "2021-08-01T00:00:00.000Z",
  },
  {
    _id: 2,
    user: {
      _id: 2,
      name: "Jane Doe",
      username: "janedoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    imageSrc: "https://picsum.photos/200",
    likes: [
      {
        user: {
          _id: 1,
          name: "John Doe",
          username: "johndoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
      },
      {
        user: {
          _id: 2,
          name: "Jane Doe",
          username: "janedoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
      },
    ],
    comments: [
      {
        index: 1,
        user: {
          _id: 1,
          name: "John Doe",
          username: "johndoe",
          profilePictureSrc: "https://picsum.photos/200",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        likes: [
          {
            user: {
              _id: 2,
              name: "Jane Doe",
              username: "janedoe",
              profilePictureSrc: "https://picsum.photos/200",
            },
          },
        ],
      },
    ],
    timestamp: "2021-08-01T00:00:00.000Z",
  },
];
export const friendMock = [
  {
    _id: 1,
    name: "John Doe",
    username: "johndoe",
    profilePictureSrc: "https://picsum.photos/200",
  },
  {
    _id: 2,
    name: "Jane Doe",
    username: "janedoe",
    profilePictureSrc: "https://picsum.photos/200",
  },
  {
    _id: 3,
    name: "Julie Doe",
    username: "juliedoe",
    profilePictureSrc: "https://picsum.photos/200",
  },
  {
    _id: 4,
    name: "Jack Doe",
    username: "jackdoe",
    profilePictureSrc: "https://picsum.photos/200",
  },
  {
    _id: 5,
    name: "Jill Doe",
    username: "jilldoe",
    profilePictureSrc: "https://picsum.photos/200",
  },
  {
    _id: 6,
    name: "James Doe",
    username: "jamesdoe",
    profilePictureSrc: "https://picsum.photos/200",
  },
  {
    _id: 7,
    name: "Judy Doe",
    username: "judydoe",
    profilePictureSrc: "https://picsum.photos/200",
  },
  {
    _id: 8,
    name: "Jules Doe",
    username: "julesdoe",
    profilePictureSrc: "https://picsum.photos/200",
  },
  {
    _id: 9,
    name: "Jenny Doe",
    username: "jennydoe",
    profilePictureSrc: "https://picsum.photos/200",
  },
  {
    _id: 10,
    name: "Joaquim Doe",
    username: "joaquimdoe",
  },
  {
    _id: 11,
    name: "Johan Doe",
    username: "johandoe",
    profilePictureSrc: "https://picsum.photos/200",
  },
];