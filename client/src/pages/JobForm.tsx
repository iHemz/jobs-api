import { addJob, handleJobChange, updateJob, validateJob } from "@/features";
import type { JobFieldChangeAction } from "@/features/types";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { Button, Form } from "@/styledComponents";
import { JOB_STATUS_DATA, JOB_TYPE_DATA } from "@/utils/data";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export function JobForm() {
  const isDark = useAppSelector((state) => state.tools.isDarkTheme);
  const { id } = useParams();
  const isEditing = !!id;

  const navigate = useNavigate();

  const { job, isLoading, errors } = useAppSelector((state) => state.job);
  const dispatch = useAppDispatch();

  const onChange = ({ key, value }: JobFieldChangeAction) => {
    dispatch(handleJobChange({ key, value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(validateJob(isEditing));
    if (isEditing) {
      dispatch(updateJob())
        .unwrap()
        .then(() => navigate("/app/jobs"));
      return;
    }
    dispatch(addJob())
      .unwrap()
      .then(() => navigate("/app/jobs"));
  };

  const BUTTON_TEXT = isLoading ? "Saving..." : isEditing ? "Update" : "Create";

  return (
    <Form
      $isDark={isDark}
      onSubmit={onSubmit}
      className="form-center"
      noValidate
    >
      <TextField
        label="Company"
        variant="outlined"
        value={job.company}
        onChange={(e) => onChange({ key: "company", value: e.target.value })}
        required
        error={!!errors.company}
        helperText={errors.company}
        className="auth-input"
      />

      <TextField
        label="Position"
        variant="outlined"
        value={job.position}
        onChange={(e) => onChange({ key: "position", value: e.target.value })}
        required
        error={!!errors.position}
        helperText={errors.position}
        className="auth-input"
      />

      {isEditing && (
        <>
          <FormControl className="auth-input">
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              label="Status"
              variant="outlined"
              value={job.status}
              onChange={(e) =>
                onChange({ key: "status", value: e.target.value })
              }
              error={!!errors.status}
              className="auth-input"
            >
              {JOB_STATUS_DATA.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{ color: "white " }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.status}</FormHelperText>
          </FormControl>
        </>
      )}

      <FormControl className="auth-input">
        <InputLabel id="job-type">Job Type</InputLabel>
        <Select
          labelId="job-type"
          label="Job Type"
          variant="outlined"
          value={job.jobType}
          onChange={(e) => onChange({ key: "jobType", value: e.target.value })}
          error={!!errors.jobType}
          className="auth-input"
        >
          {JOB_TYPE_DATA.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{ color: "white " }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.jobType}</FormHelperText>
      </FormControl>

      <TextField
        label="Job Location"
        variant="outlined"
        value={job.jobLocation}
        onChange={(e) =>
          onChange({ key: "jobLocation", value: e.target.value })
        }
        error={!!errors.jobLocation}
        helperText={errors.jobLocation}
        className="auth-input"
      />

      <Button type="submit">{BUTTON_TEXT}</Button>
    </Form>
  );
}
