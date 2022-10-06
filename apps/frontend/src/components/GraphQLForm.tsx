import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { APIError, useMutation } from "graphql-hooks";
import { User, UserCreationPayload } from "../generated/graphql/types";
import { UserCreationPayloadSchema } from "../generated/graphql/zod";
import { Form } from "./Form";

const query = `
mutation CreateUser($payload: UserCreationPayload!) {
  createUser(payload: $payload) {
    id
    name
    email
    status
  }
}

`;

export const GraphQLForm = ({
  useFrontendValidation,
}: {
  useFrontendValidation: boolean;
}) => {
  const [data, setData] = useState<UserCreationPayload | APIError<object>>();
  
  const [addUser] = useMutation<
    { createUser: User },
    { payload: UserCreationPayload }
  >(query);
  
  const form = useForm<UserCreationPayload>({
    resolver: useFrontendValidation
      ? zodResolver(UserCreationPayloadSchema())
      : undefined,
  });

  useEffect(() => {
    form.clearErrors();
  }, [useFrontendValidation])

  const submit = async (input: UserCreationPayload) => {
    const { data: result, error } = await addUser({
      variables: { payload: input },
    });
    setData(error || result?.createUser);
  };

  return (
    <FormProvider {...form}>
      <h3 className="space-x-2 text-lg items-center flex text-[#e10098] mb-8 font-normal mt-0">
        <img
          src="https://graphql.org/img/logo.svg"
          className="inline-block h-6"
        />
        <span>GraphQL</span>
      </h3>
      <Form onSubmit={submit} />
      <div className="mt-8">
        <pre className="p-4 overflow-auto rounded bg-slate-100">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </FormProvider>
  );
};
