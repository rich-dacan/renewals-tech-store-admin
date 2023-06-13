import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div className="bg-slate-900 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        Not signed in <br />
        <button
          onClick={() => signIn("google")}
          className="bg-gray-600 p-2 rounded-lg "
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
