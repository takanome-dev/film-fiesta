import React from "react";
import { LikeType } from "../types";

const Like: React.FC<LikeType> = ({ liked, onLike }) => {
  const classes = liked ? "fa fa-heart" : "fa fa-heart-o";
  return <i onClick={() => onLike()} className={classes}></i>;
};

export default Like;
