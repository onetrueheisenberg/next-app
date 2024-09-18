"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
  const router = useRouter();
  return (
    <button className="btn btn-primary" onClick={() => router.push("/users")}>
      New User
    </button>
  );
};

export default NewUser;
