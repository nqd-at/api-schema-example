import { Button, TextInput } from "@mantine/core";
import { useFormContext } from "react-hook-form";
import { UserCreationPayload } from "../generated/graphql/types";
import { UserCreationParams } from "../generated/rest";

type CommonFormData = UserCreationParams | UserCreationPayload;

type FormProps = {
  onSubmit: (data: CommonFormData) => void;
};

export function Form(props: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<CommonFormData>();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className="space-y-4">
      <TextInput
        label="Name"
        {...register("name")}
        error={errors.name?.message}
      />
      <TextInput
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />
      <Button color="blue" variant="filled" type="submit">
        Submit
      </Button>
    </form>
  );
}
