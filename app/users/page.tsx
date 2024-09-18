import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: {
    sortBy: string;
  };
}

const UsersPage = async ({ searchParams: { sortBy } }: Props) => {
  console.log(sortBy);
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Lading...</p>}>
        <UserTable sortBy={sortBy} />
      </Suspense>
      {/* <a href="/users/new">Create New User</a> */}
    </>
  );
};

export default UsersPage;
