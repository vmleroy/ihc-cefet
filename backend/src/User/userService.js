import database from "../database.js";
const userCollection = database.collection("user");
import imgbbUploader from 'imgbb-uploader';

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

    const defaultProfilePicture = 'https://i.ibb.co/nwfMnMC/my-Manga-List-default-user-profile-pic.png';
    const defaultBanner = 'https://www.bio.org/act-root/bio/assets/images/banner-default.png'
    const user = {
      _id,
      email,
      password,
      name,
      profilePictureSrc: defaultProfilePicture,
      bannerImageSrc: defaultBanner,
      friends: [],
      friendRequests: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    if(data.profilePictureSrc == undefined){
      return userCollection.insertOne(user)
    } else {
    const imgbbOptions = {
      apiKey: "d800fef0297081cd154ac0a53179efe1",
      imagePath: data.profilePictureSrc,
      name: data._id + Date.now(),
    }

    return imgbbUploader(imgbbOptions).then(async (response) => {
      user.profilePictureSrc = response.url;
      return userCollection.insertOne(user)
    }).catch((error) => console.error(error))
  }
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
