import { useQuery } from "react-query";

const useUser = (id) => {
  return useQuery(["user", id], async () => {
    const response = await fetch(`http://localhost:1999/user/${id}`);
    return response.json();
  });
};

const useUsers = (filters) => {
  const stringifiedFilters = JSON.stringify(filters);
  return useQuery("users", async () => {
    const response = await fetch(
      "http://localhost:1999/user" +
        (filters ? `?filters=${stringifiedFilters}` : "")
    );
    return response.json();
  });
};

const useCreateUser = () => {
  return useMutation(async (data) => {
    const response = await fetch("http://localhost:1999/user", {
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
    const response = await fetch("http://localhost:1999/user/" + id, {
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
    const response = await fetch("http://localhost:1999/user" + id, {
      method: "DELETE",
    });

    return response.json();
  });
};

export { useUser, useUsers, useCreateUser, useUpdateUser, useDeleteUser };
