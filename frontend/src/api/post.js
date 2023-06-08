import { useQuery } from "react-query";

const usePost = (id) => {
  return useQuery(["post", id], async () => {
    const response = await fetch(`http://localhost:1999/api/post/${id}`);
    return response.json();
  });
};

const usePosts = (filters) => {
  const stringifiedFilters = new URLSearchParams(
    JSON.parse(JSON.stringify(filters))
  ).toString();
  return useQuery("posts", async () => {
    const response = await fetch(
      `http://localhost:1999/api/post?${stringifiedFilters}`
    );
    return response.json();
  });
};

const useCreatePost = () => {
  return useMutation(async (data) => {
    const response = await fetch("http://localhost:1999/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
