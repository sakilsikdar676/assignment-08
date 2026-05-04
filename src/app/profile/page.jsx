"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import "../globals.css";
import { Mail, Edit3, User, Image as ImageIcon, ShieldCheck, Calendar } from "lucide-react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;

    try {
      // Better to check which method your auth library uses
      await authClient.updateUser({ name, image });
      document.getElementById("edit_modal").close();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050510] p-4 font-sans text-white">
      {/* Main Large Card */}
      <div className="relative w-full max-w-4xl bg-[#0d0d1f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Top Decorative Banner */}
        <div className="h-32 w-full bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-blue-600/20 border-b border-white/5"></div>

        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center md:items-start">
          
          {/* Left Side: Avatar Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative -mt-24 md:-mt-28">
              <div className="w-40 h-40 rounded-3xl p-1 bg-gradient-to-tr from-cyan-400 to-purple-500 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full rounded-[22px] overflow-hidden border-4 border-[#0d0d1f] bg-[#1a1a3a] flex items-center justify-center">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt="Profile"
                      width={160}
                      height={160}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  ) : (
                    <span className="text-5xl font-bold text-cyan-400">
                      {user?.name?.charAt(0).toUpperCase() || "U"}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="text-center">
               <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20">
                Verified User
              </span>
            </div>
          </div>

          {/* Right Side: Information Details */}
          <div className="flex-1 w-full space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {user?.name || "Loading..."}
                </h1>
                <p className="text-gray-400 mt-1 flex items-center gap-2">
                  <Mail size={16} className="text-cyan-400" /> {user?.email}
                </p>
              </div>
              <button
                onClick={() => document.getElementById("edit_modal").showModal()}
                className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white text-black font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg shadow-white/5"
              >
                <Edit3 size={18} /> Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Info Tiles */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Full Name</p>
                <p className="text-lg font-medium text-gray-200">{user?.name || "Not set"}</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Account Status</p>
                <p className="text-lg font-medium text-green-400 flex items-center gap-2">
                  <ShieldCheck size={18} /> Active
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Role</p>
                <p className="text-lg font-medium text-gray-200">User</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Joined</p>
                <p className="text-lg font-medium text-gray-200 flex items-center gap-2">
                  <Calendar size={18} /> {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Modal Design */}
      <dialog id="edit_modal" className="modal backdrop-blur-md">
        <div className="modal-box bg-[#0d0d1f] border border-white/10 shadow-2xl p-8">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
            Edit Profile Settings
          </h3>
          <form onSubmit={handleUpdate} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Display Name</label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-3 text-gray-500" />
                <input
                  name="name"
                  defaultValue={user?.name}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-400 ml-1">Profile Image URL</label>
              <div className="relative">
                <ImageIcon size={18} className="absolute left-3 top-3 text-gray-500" />
                <input
                  name="image"
                  defaultValue={user?.image}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => document.getElementById("edit_modal").close()}
                className="flex-1 px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-[2] bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-2.5 rounded-xl transition-all shadow-lg shadow-cyan-900/20"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ProfilePage;