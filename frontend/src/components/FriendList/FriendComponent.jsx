import React from "react";

export const FriendComponent = ({ friends, start, end }) => {
  return friends.map((friend, index) => {
    if (index >= start && index < end) {
      console.log(index)
      return (
        <div
          className="flex flex-col items-center justify-center"
          key={`friend-${friend.id}`}
        >
          <img
            className="h-10 w-10 rounded-full"
            src={friend.profilePictureSrc}
            alt={friend.name}
          />
          <p className="text-xs">{friend.name}</p>
        </div>
      );
    }
  });
};
