import database from "../database.js";
const userCollection = database.collection("user");

const userService = {};

userService.show = async (id) => {
  try {
    return await userCollection.findOne({ _id: id });
  } catch (error) {
    console.log("Error in userService.show: ", error);
  }
};
userService.index = async (filters) => {
  try {
    return await userCollection.find(filters ? { ...filters } : {}).toArray();
  } catch (error) {
    console.log("Error in userService.index: ", error);
  }
};
userService.create = async (data) => {
  try {
    const { _id, email, password, name } = data;
    if (!_id || !email || !password || !name)
      throw new Error("Missing required fields");

    const user = {
      _id,
      email,
      password,
      name,
      profilePictureSrc: null,
      bannerImageSrc: null,
      friends: [],
      friendRequests: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    return await userCollection.insertOne(user);
  } catch (error) {
    console.log("Error in userService.create: ", error);
  }
};
userService.update = async (id, data) => {
  try {
    if (!id) throw new Error("Missing id");
    const {
      email,
      password,
      name,
      profilePictureSrc,
      bannerImageSrc,
      friends,
      friendRequests,
    } = data;

    const user = {
      ...(email && { email }),
      ...(password && { password }),
      ...(name && { name }),
      ...(profilePictureSrc && { profilePictureSrc }),
      ...(bannerImageSrc && { bannerImageSrc }),
      ...(friends && { friends }),
      ...(friendRequests && { friendRequests }),
      updatedAt: Date.now(),
    };

    return await userCollection.updateOne({ _id: id }, { $set: user });
  } catch (error) {
    console.log("Error in userService.update: ", error);
  }
};
userService.delete = async (id) => {
  try {
    if (!id) throw new Error("Missing id");
    return await userCollection.deleteOne({ _id: id });
  } catch (error) {
    console.log("Error in userService.delete: ", error);
  }
};

export default userService;
