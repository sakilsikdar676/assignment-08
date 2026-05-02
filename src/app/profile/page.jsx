"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import "../globals.css";
const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
        {/* Container with relative position and overflow hidden for the animated border */}
        <div className="relative w-full max-w-[380px] p-[2px] overflow-hidden rounded-2xl flex items-center justify-center group">
          {/* The Rotating Background (Border) */}
          <div className="absolute inset-[-1000%] animate-border-rotate bg-[conic-gradient(from_0deg,#ff00ff,#00ffff,#ff00ff)] group-hover:duration-500" />

          {/* Inner Card Content */}
          <div className="relative w-full bg-[#0d0d1f] rounded-2xl p-6 text-white flex flex-col items-center">
            {/* Avatar Area */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700 mb-4">
              <Image
                src={user?.image || user?.name(0)}// Screenshot 2026-05-02 083950.png এর মতো ইমেজ এখানে দাও
                alt="Profile"
                width={96}
                height={96}
                 referrerPolicy="no-referrer"
                className="object-cover"
              />
            </div>

            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-gray-400 text-sm mb-6">{user?.email}</p>

            {/* Menu Items */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
