import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosInstance } from '@/lib/axios-client';
import { MutationConfig } from '@/lib/react-query';

import { getUsersQueryOptions } from './get-users';

export type DeleteUserDTO = {
  userId: string;
};

export const deleteUser = ({ userId }: DeleteUserDTO) => {
  return axiosInstance.delete(`/users/${userId}`);
};

type UseDeleteUserOptions = {
  mutationConfig?: MutationConfig<typeof deleteUser>;
};

export const useDeleteUser = ({
  mutationConfig,
}: UseDeleteUserOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getUsersQueryOptions().queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: deleteUser,
  });
};
