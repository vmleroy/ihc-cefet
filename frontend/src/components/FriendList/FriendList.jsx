import React from "react";
import * as Icon from "react-feather";
import { IconButton } from "../IconButton";

import { FriendComponent } from "./FriendComponent.jsx";

export const FriendList = ({ friends }) => {
  const numberOfFriendsShown = 10;
  
  const [startPositionInArray, setStartPositionInArray] = React.useState(0);

  const onClickLeftArrow = () => {
    if (startPositionInArray - numberOfFriendsShown < 0) {
      return null;
    }
    if (startPositionInArray > 0) {
      setStartPositionInArray(startPositionInArray - numberOfFriendsShown)
    }
  };
  const onClickRightArrow = () => {
    if (startPositionInArray + numberOfFriendsShown >= friends.length) {
      return null;
    }
    if (startPositionInArray < friends.length) {
      setStartPositionInArray(startPositionInArray + numberOfFriendsShown)
    }
  };

  return (
    <div className="flex w-full flex-row">
      <IconButton
        icon={<Icon.ArrowLeft size={18} />}
        haveTooltip={false}
        onClickFunction={onClickLeftArrow}
      />
      <div className="flex w-fit flex-row gap-5">
        <FriendComponent friends={friends} start={startPositionInArray} end={startPositionInArray + numberOfFriendsShown}/>
      </div>
      <IconButton
        icon={<Icon.ArrowRight size={18} />}
        haveTooltip={false}
        onClickFunction={onClickRightArrow}
      />
    </div>
  );
};
