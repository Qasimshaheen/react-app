import React, { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { isValid, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "Age must be at least 18" }),
});
type FormData = z.infer<typeof schema>;
export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mp-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name")}
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mp-3">
        <label htmlFor="age" className="form control">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button
        disabled={!isValid}
        type="submit"
        className="btn btn-primary mt-2"
      >
        Submit
      </button>
    </form>
  );
};
