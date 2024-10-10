import React, { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
interface FormData {
  name: string;
  age: number;
}
export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mp-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 5 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 5 characters.</p>
        )}
      </div>
      <div className="mp-3">
        <label htmlFor="age" className="form control">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
    </form>
  );
};
