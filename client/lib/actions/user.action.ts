"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import { liveblocks } from "../liveblock";



export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
    try {
        const { data } = await clerkClient.users.getUserList({
            emailAddress: userIds,
        });

        const users = data.map((user) => ({
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.emailAddresses[0].emailAddress,
            avatar: user.imageUrl,
        }));

        const sortedUsers = userIds.map((email) => users.find((user) => user.email === email));

        return parseStringify(sortedUsers);
    } catch (error) {
        console.log(`Error fetching users: ${error}`);
    }
}

export async function getDocumentUsers({ roomId, currentUser, text }: { roomId: string, currentUser: string, text: string }) {

    try {

        // finding the room from liveblocks using the roomId
        const room = await liveblocks.getRoom(roomId);
        // finding the users from the room object and filtering out the current user from the list of users in the room object 
        const users = Object.keys(room.usersAccesses).filter((email) => email !== currentUser);

        if (text.length > 0) {

            // converting the text to lowercase  to make the search case insensitive  
            const lowerCaseText = text.toLowerCase();

            // filtering out the users based on the text entered in the search bar   
            const filteredUsers = users.filter((email: string) => email.toLowerCase().includes(lowerCaseText))

            // fetching the user details from clerk using the filtered users
            return parseStringify(filteredUsers);
        }


    } catch (error) {
        console.log(`Error fetching users: ${error}`);
    }

}

