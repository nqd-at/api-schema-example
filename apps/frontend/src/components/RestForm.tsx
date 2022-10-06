import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./Form";
import { UserCreationPayloadType, UserType } from "../generated/rest";
import UserCreationPayloadSchema from "../generated/rest/zod/UserCreationParams";
import { useEffect, useState } from "react";

export const RestForm = ({
  useFrontendValidation,
}: {
  useFrontendValidation: boolean;
}) => {
  const [data, setData] = useState<UserType>();

  const form = useForm<UserCreationPayloadType>({
    resolver: useFrontendValidation
      ? zodResolver(UserCreationPayloadSchema)
      : undefined,
  });

  const submit = async (input: UserCreationPayloadType) => {
    const response = await fetch("http://localhost:3000/rest/users", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = (await response.json()) as UserType;
    setData(result);
  };

  useEffect(() => {
    form.clearErrors();
  }, [useFrontendValidation]);

  return (
    <FormProvider {...form}>
      <h3 className="flex items-center mt-0 space-x-2 text-lg mb-7">
        <img
          src="https://jsonapi.org/images/jsonapi.png"
          className="inline-block h-8"
        />
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
