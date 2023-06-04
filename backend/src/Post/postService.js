import { ObjectId } from "mongodb";
import database from "../database.js";
import userService from "../User/userService.js";
const postCollection = database.collection("post");

const postService = {};

postService.show = async (id) => {
  try {
    return await postCollection.findOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.log("Error in postService.show: ", error);
  }
};
postService.index = async (filters) => {
  try {
    return await postCollection.find(filters ? { ...filters } : {}).toArray();
  } catch (error) {
    console.log("Error in postService.index: ", error);
  }
};
postService.create = async (data) => {
  try {
    const { userId, text, imageSrc } = data;
    if (!userId) throw new Error("Missing userId");

    const user = await userService.show(userId);
    if (!user) throw new Error("User not found");

    const post = {
      userId,
      text,
      imageSrc,
      likes: [],
      comments: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    return await postCollection.insertOne(post);
  } catch (error) {
    console.log("Error in postService.create: ", error);
  }
};
postService.update = async (id, data) => {
  try {
    if (!id) throw new Error("Missing id");
    const { text, imageSrc, likes, comments } = data;

    const post = {
      ...(text && { text }),
      ...(imageSrc && { imageSrc }),
      ...(likes && { likes }),
      ...(comments && { comments }),
      updatedAt: Date.now(),
    };

    return await postCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: post }
    );
  } catch (error) {
    console.log("Error in postService.update: ", error);
  }
};
postService.delete = async (id) => {
  try {
    if (!id) throw new Error("Missing id");
    return await postCollection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.log("Error in postService.delete: ", error);
  }
};

export default postService;
