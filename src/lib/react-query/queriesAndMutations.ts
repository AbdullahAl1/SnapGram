import {
  useQuery, //fetch the data
  useMutation, //modifyv the data
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";

import { createUserAccount } from "../appwrite/api";

//export mutation 
export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};
