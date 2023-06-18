import React, { ReactNode } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import { NavigationAside } from "@/components/NavigationAside";

interface Props {
  children?: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const { data: session } = useSession();

  console.log("session: ", session);

  if (!session) {
    return (
      <div className="bg-slate-900 w-screen h-screen flex items-center">
        <div className="text-center text-white w-full">
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
    <div className="flex min-h-screen bg-stone-800">
      <NavigationAside session={session} signOut={signOut} />

      <div className="bg-white h-screen flex flex-grow p-4 mt-2 mb-2 mr-2 rounded-lg">
        {children}
      </div>
    </div>
  );
};
