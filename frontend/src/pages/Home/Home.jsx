import React from "react";

import * as Icon from "react-feather";

import { CreatePost } from "../../components/CreatePost";
import { CommentTextArea } from "../../components/CommentTextArea";
import { Post } from "../../components/Post";
import { HorizontalDivider } from "../../components/Divider";
import { FriendList } from "../../components/FriendList";

export const Home = () => {
  const postMock = [
    {
      id: 1,
      user: {
        id: 1,
        name: "John Doe",
        username: "johndoe",
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
        {
          user: {
            _id: "64820c03da396d1a002e536a",
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
            id: 1,
            name: "John Doe",
            username: "johndoe",
            profilePictureSrc: "https://picsum.photos/200",
          },
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          likes: [
            {
              user: {
                id: 2,
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
      id: 3,
      user: {
        id: 2,
        name: "Jane Doe",
        username: "janedoe",
        profilePictureSrc: "https://picsum.photos/200",
      },
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      imageSrc: "https://picsum.photos/200",
      likes: [
        {
          user: {
            id: 1,
            name: "John Doe",
            username: "johndoe",
            profilePictureSrc: "https://picsum.photos/200",
          },
        },
        {
          user: {
            id: 2,
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
            id: 1,
            name: "John Doe",
            username: "johndoe",
            profilePictureSrc: "https://picsum.photos/200",
          },
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          likes: [
            {
              user: {
                id: 2,
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
      id: 4,
      user: {
        id: 1,
        name: "John Doe",
        username: "johndoe",
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
        {
          user: {
            _id: "64820c03da396d1a002e536a",
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
            id: 1,
            name: "John Doe",
            username: "johndoe",
            profilePictureSrc: "https://picsum.photos/200",
          },
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          likes: [
            {
              user: {
                id: 2,
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
      id: 2,
      user: {
        id: 2,
        name: "Jane Doe",
        username: "janedoe",
        profilePictureSrc: "https://picsum.photos/200",
      },
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      imageSrc: "https://picsum.photos/200",
      likes: [
        {
          user: {
            id: 1,
            name: "John Doe",
            username: "johndoe",
            profilePictureSrc: "https://picsum.photos/200",
          },
        },
        {
          user: {
            id: 2,
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
            id: 1,
            name: "John Doe",
            username: "johndoe",
            profilePictureSrc: "https://picsum.photos/200",
          },
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          likes: [
            {
              user: {
                id: 2,
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
  const friendMock = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "Jane Doe",
      username: "janedoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    {
      id: 3,
      name: "Julie Doe",
      username: "juliedoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    {
      id: 4,
      name: "Jack Doe",
      username: "jackdoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    {
      id: 5,
      name: "Jill Doe",
      username: "jilldoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    {
      id: 6,
      name: "James Doe",
      username: "jamesdoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    {
      id: 7,
      name: "Judy Doe",
      username: "judydoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    {
      id: 8,
      name: "Jules Doe",
      username: "julesdoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    {
      id: 9,
      name: "Jenny Doe",
      username: "jennydoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
    {
      id: 10,
      name: "Joaquim Doe",
      username: "joaquimdoe",
    },
    {
      id: 11,
      name: "Johan Doe",
      username: "johandoe",
      profilePictureSrc: "https://picsum.photos/200",
    },
  ];

  return (
    <div className="h-full w-full overflow-auto">
      <h1 className="text-center text-4xl">Home</h1>
      <div className="flex justify-center">
        <div className="flex w-3/4 flex-col gap-8">
          <div id="friend-list" className="flex w-full">
            <FriendList friends={friendMock} />
          </div>
          <div id="create-post" className="flex w-full">
            <CreatePost icon={<Icon.Image size={24} />} size={"w-full"} />
          </div>
          <div
            id="posts"
            className="mb-5 flex w-full flex-col gap-5 rounded-b-lg rounded-t-lg bg-light-background p-2 dark:bg-dark-background"
          >
            {postMock.map((post, index) => (
              <div
                className="flex h-fit w-full flex-col gap-5"
                key={`post-${post.id}`}
              >
                <Post post={post} />
                {postMock.length > 1 && index < postMock.length - 1 && (
                  <HorizontalDivider />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
