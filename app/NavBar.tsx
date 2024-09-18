import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="flex bg-slate-100 p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
    </div>
  );
};

export default NavigationBar;
