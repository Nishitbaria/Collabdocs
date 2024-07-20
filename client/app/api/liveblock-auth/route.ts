
import { liveblocks } from "@/lib/liveblock";
import { getUserColor } from "@/types";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export async function POST(request: Request) {
    // Get the current user from clerauth database

    const clerkUser = await currentUser();


    if (!clerkUser) {
        return redirect("/sign-in");
    }

    // Get the user metadata 
    const { id, firstName, lastName, emailAddresses, imageUrl } = clerkUser;

    // get the current user from the your database

    const user = {
        id,
        info: {
            id,
            name: `${firstName} ${lastName}`,
            email: emailAddresses[0].emailAddress,
            avatar: imageUrl,
            oolor: getUserColor(id),
        }
    }

    // Identify the user and return the result
    const { status, body } = await liveblocks.identifyUser(
        {
            userId: user.info.email,
            groupIds: [],
        },
        { userInfo: user.info },
    );

    return new Response(body, { status });
}