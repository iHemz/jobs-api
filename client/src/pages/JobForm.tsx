import { useAppSelector } from "@/hooks/useStore";
import { Button, Form } from "@/styledComponents";
import { type JobFormProps } from "@/types/jobs";
import { JOB_TYPE_DATA } from "@/utils/data";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useCallback, useEffect } from "react";
import {
  Controller,
  useForm,
  type ErrorOption,
  type SubmitHandler,
} from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export function JobForm() {
  const isDark = useAppSelector((state) => state.tools.isDarkTheme);
  const { id } = useParams();
  const isEditing = !!id;

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading, isSubmitSuccessful },
    setError,
  } = useForm<JobFormProps>({
    defaultValues: {
      company: "",
      position: "",
      status: "pending",
      jobType: "full-time",
      jobLocation: "",
    },
    mode: "onSubmit",
  });

  const validateParams = (data: JobFormProps) => {
    const errors: Record<string, ErrorOption> = {};
    if (!isEditing) {
      if (!data.status) {
        errors.status = {
          type: "required",
          message: "status  is required",
        };
      }
      if (!data.company) {
        errors.company = {
          type: "required",
          message: "company is required",
        };
      }
    }
    if (!data.position) {
      errors.position = {
        type: "required",
        message: "position is required",
      };
    }
    if (!data.jobType) {
      errors.jobType = {
        type: "required",
        message: "jobType is required",
      };
    }
    if (!data.jobLocation) {
      errors.jobLocation = {
        type: "required",
        message: "jobLocation is required",
      };
    }
    return errors;
  };

  const onSubmit: SubmitHandler<JobFormProps> = (data) => {
    const validationErrors = validateParams(data);
    if (Object.keys(validationErrors).length > 0) {
      Object.entries(validationErrors).forEach(([field, error]) => {
        setError(field as any, error, { shouldFocus: true });
      });
      return;
    }
  };

  const navigateToJobs = useCallback(() => {
    if (isSubmitSuccessful) {
      navigate("/app/jobs");
    }
  }, [isSubmitSuccessful, navigate]);

  useEffect(() => {
    navigateToJobs();
  }, [navigateToJobs]);

  const BUTTON_TEXT = isLoading ? "Saving..." : isEditing ? "Update" : "Create";

  return (
    <Form
      $isDark={isDark}
      onSubmit={handleSubmit(onSubmit)}
      className="form-center"
      noValidate
    >
      <Controller
        name="company"
        control={control}
        render={({ field }) => (
          <TextField
            label="Company"
            variant="outlined"
            {...field}
            required
            error={!!errors.company}
            helperText={errors.company?.message}
            className="auth-input"
          />
        )}
      />
      <Controller
        name="position"
        control={control}
        render={({ field }) => (
          <TextField
            label="Position"
            variant="outlined"
            {...field}
            error={!!errors.position}
            helperText={errors.position?.message}
            className="auth-input"
          />
        )}
      />
      {!isEditing && (
        <>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <TextField
                label="Status"
                variant="outlined"
                {...field}
                error={!!errors.status}
                helperText={errors.status?.message}
                className="auth-input"
              />
            )}
          />
        </>
      )}
      <Controller
        name="jobType"
        control={control}
        render={({ field }) => (
          <FormControl>
            <Select
              label="Job Type"
              variant="outlined"
              {...field}
              error={!!errors.jobType}
              className="auth-input"
            >
              {JOB_TYPE_DATA.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.jobType?.message}</FormHelperText>
          </FormControl>
        )}
      />
      <Controller
        name="jobLocation"
        control={control}
        render={({ field }) => (
          <TextField
            label="Job Location"
            variant="outlined"
            {...field}
            error={!!errors.jobLocation}
            helperText={errors.jobLocation?.message}
            className="auth-input"
          />
        )}
      />
      <Button type="submit">{BUTTON_TEXT}</Button>
    </Form>
  );
}
