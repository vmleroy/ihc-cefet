import { useQuery, useMutation } from "react-query";
import qs from "qs";

const useUser = (id) => {
  return useQuery(["user", id], async () => {
    const response = await fetch(`http://localhost:1999/api/user/${id}`);
    return response.json();
  });
};

const useUsers = (filters, options) => {
  const stringifiedFilters = qs.stringify(filters);
  return useQuery(
    "users",
    async () => {
      const response = await fetch(
        `http://localhost:1999/api/user?${stringifiedFilters}`
      );
      return response.json();
    },
    options
  );
};

const useCreateUser = () => {
  return useMutation(async (data) => {
    const response = await fetch("http://localhost:1999/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  });
};

const useUpdateUser = (id) => {
  return useMutation(async (data) => {
    const response = await fetch("http://localhost:1999/api/user/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  });
};

const useDeleteUser = (id) => {
  return useMutation(async () => {
    const response = await fetch("http://localhost:1999/api/user" + id, {
      method: "DELETE",
    });

    return response.json();
  });
};

export { useUser, useUsers, useCreateUser, useUpdateUser, useDeleteUser };
