const decoder = {};

decoder.decodeObject = (obj, exceptions = []) => {
  try {
    if (!obj) return obj;
    const decoded = { ...obj };
    Object.keys(obj).forEach((key) => {
      if (!obj[key] || exceptions.includes(key)) return;
      if (Array.isArray(obj[key])) {
        decoded[key] = decoder.decodeArray(obj[key], exceptions);
      } else if (typeof obj[key] === "object") {
        decoded[key] = decoder.decodeObject(decoded[key], exceptions);
      } else if (typeof obj[key] === "string") {
        if (obj[key] === "true") {
          decoded[key] = true;
        } else if (obj[key] === "false") {
          decoded[key] = false;
        } else if (obj[key] === "null") {
          decoded[key] = null;
        } else if (obj[key] === "undefined") {
          decoded[key] = undefined;
        } else if (obj[key] === "NaN") {
          decoded[key] = NaN;
        } else if (Number(obj[key])) {
          decoded[key] = Number(obj[key]);
        }
      }
    });
    return decoded;
  } catch (error) {
    console.error("decoder.decodeObject error:", error);
    throw error;
  }
};

decoder.decodeArray = (arr, exceptions = []) => {
  try {
    const decoded = [...arr];
    decoded.forEach((item, index) => {
      if (Array.isArray(item)) {
        decoded[index] = decoder.decodeArray(item, exceptions);
      } else if (typeof item === "object") {
        decoded[index] = decoder.decodeObject(item, exceptions);
      } else if (typeof item === "string") {
        if (item === "true") {
          decoded[index] = true;
        } else if (item === "false") {
          decoded[index] = false;
        } else if (item === "null") {
          decoded[index] = null;
        } else if (item === "undefined") {
          decoded[index] = undefined;
        } else if (item === "NaN") {
          decoded[index] = NaN;
        } else if (Number(item)) {
          decoded[index] = Number(item);
        }
      }
    });
    return decoded;
  } catch (error) {
    console.error("decoder.decodeArray error:", error);
    throw error;
  }
};

decoder.parseRequest = (req, res, next, exceptions = []) => {
  try {
    req.body = decoder.decodeObject(req.body, exceptions);
    req.params = decoder.decodeObject(req.params, exceptions);
    req.query = decoder.decodeObject(req.query, exceptions);
    next();
  } catch (error) {
    console.error(
      "decoder.parseRequest error:",
      error,
      "Endpoint hit:",
      req.url
    );
    res.status(400).json({
      success: false,
      message: "Couldn't parse request",
    });
  }
};

decoder.parseUser = (req, res, next) =>
  decoder.parseRequest(req, res, next, ["email", "password"]);
decoder.parsePost = (req, res, next) =>
  decoder.parseRequest(req, res, next, ["text"]);

export default decoder;
