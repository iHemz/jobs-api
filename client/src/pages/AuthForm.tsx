import { loginUser, registerUser } from "@/features/user/userSlice";
import { useAppDispath, useAppSelector } from "@/hooks/useStore";
import { Button, Form } from "@/styledComponents";
import type { AuthProps, UserAuth } from "@/types/auth";
import { TextField } from "@mui/material";
import { useCallback, useEffect } from "react";
import {
  Controller,
  useForm,
  type ErrorOption,
  type SubmitHandler,
} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export function AuthForm({ authType }: AuthProps) {
  const isLogin = authType === "LOGIN";
  const isDark = useAppSelector((state) => state.tools.isDarkTheme);
  const { user, isLoading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispath();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const validateParams = (data: UserAuth) => {
    const errors: Record<string, ErrorOption> = {};
    if (!isLogin && !data.name) {
      errors.name = {
        type: "required",
        message: "Name is required",
      };
    }
    if (!data.email) {
      errors.email = {
        type: "required",
        message: "Email is required",
      };
    }
    if (!data.password) {
      errors.password = {
        type: "required",
        message: "Password is required",
      };
    }
    return errors;
  };

  const loginText = isLoading ? "Logging in..." : "Login";
  const registerText = isLoading ? "Registering..." : "Register";

  const onSubmit: SubmitHandler<UserAuth> = (data) => {
    const validationErrors = validateParams(data);
    if (Object.keys(validationErrors).length > 0) {
      Object.entries(validationErrors).forEach(([field, error]) => {
        setError(field as any, error, { shouldFocus: true });
      });
      return;
    }
    if (isLogin) {
      dispatch(loginUser(data));
      return;
    }
    dispatch(registerUser(data));
  };

  const navigateToDashboard = useCallback(() => {
    if (user) {
      navigate("/app");
    }
  }, [user, navigate]);

  useEffect(() => {
    navigateToDashboard();
  }, [navigateToDashboard]);

  return (
    <Form
      $isDark={isDark}
      onSubmit={handleSubmit(onSubmit)}
      className="form-center"
    >
      {!isLogin && (
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              label="Name"
              variant="outlined"
              {...field}
              error={!!errors.name}
              helperText={errors.name?.message}
              className="auth-input"
            />
          )}
        />
      )}
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
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            {...field}
            error={!!errors.password}
            helperText={errors.password?.message}
            className="auth-input"
          />
        )}
      />
      <Button type="submit">{isLogin ? loginText : registerText}</Button>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <Link to={isLogin ? "/auth/register" : "/auth/login"}>
          {isLogin ? "Register" : "Login"}
        </Link>
      </p>
    </Form>
  );
}
