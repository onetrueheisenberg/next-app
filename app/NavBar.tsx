"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex bg-slate-100 p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href={"/api/auth/signout"}>Sing Out</Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default NavigationBar;
