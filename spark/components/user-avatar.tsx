import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserAvatar() {

    const user = useUser();
  return (
    
    <Avatar>
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
}
