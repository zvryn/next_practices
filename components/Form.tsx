"use client";
import { createCamp } from "@/utils/actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting" : "Submit"}
    </button>
  );
};

const Form = () => {
  const [message, formAction] = useActionState(createCamp, null);
  return (
    <>
      {message && <h1>{message}</h1>}
      <form className="flex flex-col w-1/2" action={formAction}>
        <h1>Form</h1>
        <input
          type="text"
          placeholder="Camping Name"
          name="title"
          className="border"
          defaultValue="Korat Route 3060"
        />
        <input
          type="text"
          placeholder="location"
          name="location"
          className="border"
          defaultValue="Korat"
        />
        <SubmitButton />
      </form>
    </>
  );
};

export default Form;
