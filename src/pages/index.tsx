import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { NavbarAside } from "@/components/NavbarAside";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  console.log(session);

  if (!session) {
    return (
      <div className="bg-slate-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          Not signed in <br />
          <button
            onClick={() => signIn("google")}
            className="bg-gray-600 p-2 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <NavbarAside />
      <div className="bg-white h-screen flex flex-grow p-4 mt-2 mb-2 mr-2 rounded-lg">
        <p className="pb-1 text-black"> Hello, {session?.user?.name}!</p>

        {session && (
          <Image
            src={session?.user?.image ? session?.user?.image : ""}
            width={50}
            height={50}
            alt={`profile picture of the user ${session?.user?.name}`}
            priority
            quality={100}
            className="h-10 ml-2 rounded-lg"
          />
        )}

        <button
          className="bg-gray-600 p-2 rounded-lg h-10 ml-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
