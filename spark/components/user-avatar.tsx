import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserAvatar() {

  const { isSignedIn, user, isLoaded } = useUser();

   
  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
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
  
}
