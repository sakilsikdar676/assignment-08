"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import "../globals.css";
import { Mail, Edit3, Save, User, Image as ImageIcon } from "lucide-react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;

    await authClient.updateUser({ name, image });

    try {
      await authClient.updateProfile({ name, image });
      document.getElementById("edit_modal").close();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  // const profileImage =
  //   user?.image ;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#9999e700] p-6  font-sans">
      <div className="relative w-full max-w-[380px] group">
        <div className="absolute -inset-0.5 border border-white/10 rounded-2xl blur opacity-20"></div>
        <div className="relative  border border-white/10 rounded-2xl p-8 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-purple-500 mb-4">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0d0d1f]">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              ) : (
                // নামের প্রথম অক্ষর (যেমন: Masrur থেকে M)
                <span>{user?.name?.charAt(0).toUpperCase() || "U"}</span>
              )}
            </div>
          </div>
          <h2 className="text-2xl font-bold">{user?.name || "Loading..."}</h2>
          <p className="text-gray-400 text-sm mb-8 flex items-center gap-2">
            <Mail size={14} /> {user?.email}
          </p>

          <button
            onClick={() => document.getElementById("edit_modal").showModal()}
            className="px-8 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-2"
          >
            <Edit3 size={16} /> Edit Profile
          </button>
        </div>
      </div>

      <dialog
        id="edit_modal"
        className="modal bg-[#050510]/80 backdrop-blur-sm"
      >
        <div className="modal-box bg-[#0d0d1f] border border-white/10 text-white max-w-sm">
          <h3 className="font-bold text-lg text-cyan-400 mb-6">
            Update Profile
          </h3>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="form-control">
              <label className="label text-gray-400 text-xs">Full Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <User size={18} className="text-gray-500" />
                </span>
                <input
                  name="name"
                  type="text"
                  defaultValue={user?.name}
                  className="input input-bordered w-full pl-10 bg-transparent border-white/10 focus:border-cyan-500"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label text-gray-400 text-xs">
                Profile Image URL
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <ImageIcon size={18} className="text-gray-500" />
                </span>
                <input
                  name="image"
                  type="text"
                  defaultValue={user?.image}
                  className="input input-bordered w-full pl-10 bg-transparent border-white/10 focus:border-purple-500"
                />
              </div>
            </div>
            <div className="modal-action">
              <button
                type="button"
                onClick={() => document.getElementById("edit_modal").close()}
                className="btn btn-ghost text-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-gradient-to-r from-cyan-600 to-blue-600 border-none text-white px-6"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ProfilePage;
