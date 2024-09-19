import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import coffee from "../public/images/coffee.jpeg";
import tea from "../public/images/Tea.jpg";

export default async function Home() {
  const sessionValue = await getServerSession(authOptions);
  console.log(sessionValue);
  return (
    <main>
      <h1>Hello JHames</h1>
      <h3>
        Current User is {sessionValue && <span>{sessionValue.user!.name}</span>}{" "}
      </h3>
      <Link href="/users">Users</Link>
      <ProductCard />
      <Image src={tea} alt="coffee" />
    </main>
  );
}
