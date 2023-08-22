import { UserPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function ProfileTop() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div>
            <img src="/img/logo.png" alt="" className="h-12" />
          </div>
          <div className="flex flex-col">
            <span>Robert Quartey</span>
            <span className="text-gray-400">2 friend</span>
          </div>
        </div>
        <span className="hover:bg-gray-400 p-2 rounded-full duration-100 delay-100">
          <Link href={""}>
            <UserPlusIcon className="h-6" />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ProfileTop;
