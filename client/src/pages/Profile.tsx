import { updateUser } from "@/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { Button, Form } from "@/styledComponents";
import type { UserAuth } from "@/types/auth";
import { TextField } from "@mui/material";
import {
  Controller,
  useForm,
  type ErrorOption,
  type SubmitHandler,
} from "react-hook-form";

export function Profile() {
  const isDark = useAppSelector((state) => state.tools.isDarkTheme);
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<UserAuth>({
    defaultValues: {
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
      password: "",
    },
    mode: "onSubmit",
  });

  const validateParams = (data: UserAuth) => {
    const errors: Record<string, ErrorOption> = {};
    if (!data.firstname) {
      errors.firstname = {
        type: "required",
        message: "First name is required",
      };
    }
    if (!data.lastname) {
      errors.lastname = {
        type: "required",
        message: "Last name is required",
      };
    }
    if (!data.email) {
      errors.email = {
        type: "required",
        message: "Email is required",
      };
    }

    return errors;
  };

  const onSubmit: SubmitHandler<UserAuth> = (data) => {
    const validationErrors = validateParams(data);
    if (Object.keys(validationErrors).length > 0) {
      Object.entries(validationErrors).forEach(([field, error]) => {
        setError(field as any, error, { shouldFocus: true });
      });
      return;
    }

    dispatch(updateUser(data));
  };

  return (
    <Form
      $isDark={isDark}
      onSubmit={handleSubmit(onSubmit)}
      className="form-center"
    >
      <Controller
        name="firstname"
        control={control}
        render={({ field }) => (
          <TextField
            label="First Name"
            variant="outlined"
            {...field}
            error={!!errors.firstname}
            helperText={errors.firstname?.message}
            className="auth-input"
          />
        )}
      />
      <Controller
        name="lastname"
        control={control}
        render={({ field }) => (
          <TextField
            label="Last Name"
            variant="outlined"
            {...field}
            error={!!errors.lastname}
            helperText={errors.lastname?.message}
            className="auth-input"
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            label="Email"
            variant="outlined"
            {...field}
            error={!!errors.email}
            helperText={errors.email?.message}
            className="auth-input"
          />
        )}
      />

      <Button type="submit">{isSubmitting ? "Updating..." : "Update"}</Button>
    </Form>
  );
}
