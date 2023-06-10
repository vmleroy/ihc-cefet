import { useQuery, useMutation, useInfiniteQuery } from "react-query";
import qs from "qs";

const usePost = (id) => {
  return useQuery(["post", id], async () => {
    const response = await fetch(`http://localhost:1999/api/post/${id}`);
    return response.json();
  });
};

const usePosts = (filters, options) => {
  const stringifiedFilters = qs.stringify(filters);
  return useQuery(
    "posts",
    async () => {
      const response = await fetch(
        `http://localhost:1999/api/post?${stringifiedFilters}`
      );
      return response.json();
    },
    options
  );
};

const useCreatePost = () => {
  const { _id: userId } = JSON.parse(localStorage.getItem("user"));
  return useMutation(async (data) => {
    const response = await fetch("http://localhost:1999/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, userId }),
    });

    return response.json();
  });
};

const useUpdatePost = (id) => {
  return useMutation(async (data) => {
    const response = await fetch("http://localhost:1999/api/post/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  });
};

const useDeletePost = (id) => {
  return useMutation(async () => {
    const response = await fetch("http://localhost:1999/api/post" + id, {
      method: "DELETE",
    });

    return response.json();
  });
};

export { usePost, usePosts, useCreatePost, useUpdatePost, useDeletePost };
