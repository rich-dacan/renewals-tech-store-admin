import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

import { LuLogOut } from "react-icons/lu";
import { Layout } from "@/components/Generals/Layout";

const Dashboard: React.FC = () => {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="flex justify-between items-center m-3 w-full h-16 bg-stone-800 p-2 rounded-lg">
        <p className="text-white">Hello, {session?.user?.name}!</p>
        <span className="flex  justify-center">
          {session && (
            <Image
              src={session?.user?.image ? session?.user?.image : ""}
              width={50}
              height={50}
              alt={`profile picture of the user ${session?.user?.name}`}
              priority
              quality={100}
              className="h-10 rounded-lg"
            />
          )}

          <button
            className="flex items-center justify-center text-white bg-yellow-700 p-2 rounded-lg h-10 ml-2 hover:bg-yellow-800"
            title="Sign-out"
            onClick={() => signOut()}
          >
            <LuLogOut size={24} />
          </button>
        </span>
      </div>
    </Layout>
  );
};

export default Dashboard;
