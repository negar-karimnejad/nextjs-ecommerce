"use client";

import { ReactNode } from "react";
import { useFormState, useFormStatus } from "react-dom";

type ButtonProps = {
  type: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
};

function Button({ type, children }: ButtonProps) {
  const { pending, } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="btn btn-warning btn-block"
      type={type}
    >
      {pending ? (
        <span className="loading loading-spinner loading-md"/>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
