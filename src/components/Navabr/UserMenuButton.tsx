"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import profilePicPlaceholder from "../../assets/profile-pic-placeholder.png";

interface UserMenuButtonProps {
  session: Session | null;
}
function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end">
      <button className="btn btn-square btn-ghost">
        {user ? (
          <Image
            height={40}
            width={40}
            alt={user?.name || "Profile Picture"}
            src={user?.image || profilePicPlaceholder}
            className="w-10 rounded-full"
          />
        ) : (
          <>
            <span className="text-xl inline-block w-5 h-5 mb-4 stroke-current">
              ...
            </span>
          </>
        )}
      </button>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          {user ? (
            <button onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </button>
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default UserMenuButton;
