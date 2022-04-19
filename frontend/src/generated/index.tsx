import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
import { fetcher } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type Filiale = {
  __typename?: 'Filiale';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<File>;
  name: Scalars['String'];
};

export type FilialeInput = {
  description: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFiliale?: Maybe<Filiale>;
  deleteFiliale?: Maybe<Scalars['Boolean']>;
  login?: Maybe<AuthPayload>;
  register?: Maybe<Scalars['Boolean']>;
  singleUpload: File;
};


export type MutationAddFilialeArgs = {
  input?: InputMaybe<FilialeInput>;
};


export type MutationDeleteFilialeArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<RegisterInput>;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};

export type Query = {
  __typename?: 'Query';
  Filiales?: Maybe<Array<Maybe<Filiale>>>;
  users: Array<Maybe<User>>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
};

export type AddFilialeMutationVariables = Exact<{
  FilialeInput?: InputMaybe<FilialeInput>;
}>;


export type AddFilialeMutation = { __typename?: 'Mutation', addFiliale?: { __typename?: 'Filiale', id: string, name: string, description: string, image?: { __typename?: 'File', filename: string, mimetype: string, encoding: string } | null } | null };

export type GetFilialesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFilialesQuery = { __typename?: 'Query', Filiales?: Array<{ __typename?: 'Filiale', id: string, name: string, description: string, image?: { __typename?: 'File', filename: string, mimetype: string, encoding: string } | null } | null> | null };

export type DeleteFilialeMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteFilialeMutation = { __typename?: 'Mutation', deleteFiliale?: boolean | null };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: string, fullName: string, email: string } } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, fullName: string, email: string } | null> };


export const AddFilialeDocument = `
    mutation addFiliale($FilialeInput: FilialeInput) {
  addFiliale(input: $FilialeInput) {
    id
    name
    description
    image {
      filename
      mimetype
      encoding
    }
  }
}
    `;
export const useAddFilialeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddFilialeMutation, TError, AddFilialeMutationVariables, TContext>) =>
    useMutation<AddFilialeMutation, TError, AddFilialeMutationVariables, TContext>(
      ['addFiliale'],
      (variables?: AddFilialeMutationVariables) => fetcher<AddFilialeMutation, AddFilialeMutationVariables>(AddFilialeDocument, variables)(),
      options
    );
useAddFilialeMutation.fetcher = (variables?: AddFilialeMutationVariables, options?: RequestInit['headers']) => fetcher<AddFilialeMutation, AddFilialeMutationVariables>(AddFilialeDocument, variables, options);
export const GetFilialesDocument = `
    query GetFiliales {
  Filiales {
    id
    name
    description
    image {
      filename
      mimetype
      encoding
    }
  }
}
    `;
export const useGetFilialesQuery = <
      TData = GetFilialesQuery,
      TError = unknown
    >(
      variables?: GetFilialesQueryVariables,
      options?: UseQueryOptions<GetFilialesQuery, TError, TData>
    ) =>
    useQuery<GetFilialesQuery, TError, TData>(
      variables === undefined ? ['GetFiliales'] : ['GetFiliales', variables],
      fetcher<GetFilialesQuery, GetFilialesQueryVariables>(GetFilialesDocument, variables),
      options
    );

useGetFilialesQuery.getKey = (variables?: GetFilialesQueryVariables) => variables === undefined ? ['GetFiliales'] : ['GetFiliales', variables];
;

useGetFilialesQuery.fetcher = (variables?: GetFilialesQueryVariables, options?: RequestInit['headers']) => fetcher<GetFilialesQuery, GetFilialesQueryVariables>(GetFilialesDocument, variables, options);
export const DeleteFilialeDocument = `
    mutation deleteFiliale($id: ID!) {
  deleteFiliale(id: $id)
}
    `;
export const useDeleteFilialeMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteFilialeMutation, TError, DeleteFilialeMutationVariables, TContext>) =>
    useMutation<DeleteFilialeMutation, TError, DeleteFilialeMutationVariables, TContext>(
      ['deleteFiliale'],
      (variables?: DeleteFilialeMutationVariables) => fetcher<DeleteFilialeMutation, DeleteFilialeMutationVariables>(DeleteFilialeDocument, variables)(),
      options
    );
useDeleteFilialeMutation.fetcher = (variables: DeleteFilialeMutationVariables, options?: RequestInit['headers']) => fetcher<DeleteFilialeMutation, DeleteFilialeMutationVariables>(DeleteFilialeDocument, variables, options);
export const LoginDocument = `
    mutation login($loginInput: loginInput!) {
  login(input: $loginInput) {
    token
    user {
      id
      fullName
      email
    }
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );
useLoginMutation.fetcher = (variables: LoginMutationVariables, options?: RequestInit['headers']) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables, options);
export const UsersDocument = `
    query Users {
  users {
    id
    fullName
    email
  }
}
    `;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      variables?: UsersQueryVariables,
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) =>
    useQuery<UsersQuery, TError, TData>(
      variables === undefined ? ['Users'] : ['Users', variables],
      fetcher<UsersQuery, UsersQueryVariables>(UsersDocument, variables),
      options
    );

useUsersQuery.getKey = (variables?: UsersQueryVariables) => variables === undefined ? ['Users'] : ['Users', variables];
;

useUsersQuery.fetcher = (variables?: UsersQueryVariables, options?: RequestInit['headers']) => fetcher<UsersQuery, UsersQueryVariables>(UsersDocument, variables, options);