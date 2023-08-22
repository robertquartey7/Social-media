import React from "react";
import { UserPlusIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ProfileTop from "./ProfileTop";
function Profile() {
  return (
    <div className="shadow-lg p-2 md:w-[50%] m-5 rounded ">
      <div className="mb-2">
        <ProfileTop />
      </div>
      <hr />

      <div>
        <span className="flex items-center gap-1">
          <MapPinIcon className="h-5" />
          123 street NY bronx
        </span>
      </div>
      
    </div>
  );
}

export default Profile;
