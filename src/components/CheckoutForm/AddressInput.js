import React from "react";
import { useFormContext, Controller, useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";

const AddressInput = ({ label, name, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur } }) => (
          <TextField
            onChange={onChange}
            onBlur={onBlur}
            fullWidth
  
            label={label}
            required={required}
          />
        )}
      />
    </Grid>
  );
};

export default AddressInput;
