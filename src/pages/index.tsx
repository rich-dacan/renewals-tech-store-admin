import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

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
    <div className="bg-slate-950 w-screen h-screen flex-col">
      <h3>
        {" "}
        Signed in as {session?.user?.email} <br />
      </h3>
      {session && (
        <Image
          src={session?.user?.image ? session?.user?.image : ""}
          width={250}
          height={250}
          alt={`profile picture of the user ${session?.user?.name}`}
          priority
          quality={100}
        />
      )}
      <button className="bg-gray-600 p-2 rounded-lg" onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  );
}
