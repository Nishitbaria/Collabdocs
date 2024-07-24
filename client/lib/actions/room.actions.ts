"use server";


import { RoomAccesses } from "@liveblocks/node";
import { nanoid } from 'nanoid'
import { liveblocks } from "../liveblock";
import { revalidatePath } from "next/cache";
import { getAccessType, parseStringify } from "../utils";
import { redirect } from "next/navigation";


export const createDocument = async ({ userId, email }: CreateDocumentParams) => {
    const roomId = nanoid();

    try {
        const metadata = {
            creatorId: userId,
            email,
            title: 'Untitled'
        }

        const usersAccesses: RoomAccesses = {
            [email]: ['room:write']
        }

        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: []
        });

        revalidatePath('/');

        return parseStringify(room);
    } catch (error) {
        console.log(`Error happened while creating a room: ${error}`);
    }
}

export const getDocument = async ({ roomId, userId }: { roomId: string; userId: string }) => {
    try {
        const room = await liveblocks.getRoom(roomId);



        console.log(room);

        const hasAccess = Object.keys(room.usersAccesses).includes(userId);

        if (!hasAccess) {
            throw new Error('You do not have access to this document');
        }

        return parseStringify(room);
    } catch (error) {
        console.log(`Error happened while getting a room: ${error}`);
    }
}

export async function updateDocument(roomId: string, title: string) {
    try {

        console.log(roomId, title, "controlled reaching here");
        const updatedRoom = await liveblocks.updateRoom(roomId, {
            metadata: {
                title
            }
        })

        console.log(updatedRoom, "updated room");
        revalidatePath(`/documents/${roomId}`);


        return parseStringify(updatedRoom);



    } catch (error) {
        console.log(`Error happened while updating a room: ${error}`);
    }
}

export async function getDocuments(email: string) {

    try {

        if (!email) {
            console.log("User Email is Not found");
            redirect('/sign-in');
        }
        const rooms = await liveblocks.getRooms({
            userId: email
        })

        console.log(rooms, "rooms");


        if (!rooms) {

            console.log("no rooms");
        }
        return parseStringify(rooms);

    } catch (error) {
        console.log(`Error happened while getting a room: ${error}`);
    }


}

export async function updateDocumentAccess({ roomId, email, updatedBy, userType }: ShareDocumentParams) {
    try {

        const usersAccesses: RoomAccesses = {
            [email]: getAccessType(userType) as AccessType,
        }

        const room = await liveblocks.updateRoom(roomId, {
            usersAccesses
        });


        if (room) {
            // TODO : add logic to send email to the user
        }

        revalidatePath(`/documents/${roomId}`);

        return parseStringify(room);
    } catch (error) {
        console.log(`Error happened while updating a room: ${error}`);
    }
}
export const removeCollaborator = async ({ roomId, email }: { roomId: string, email: string }) => {

    try {
        // get the room code from liveblocks
        const room = await liveblocks.getRoom(roomId);

        // check if the email is the creator of the document
        if (room.metadata.email === email) {
            throw new Error('You cannot remove the creator of the document');
        }

        // remove the user from the room access list and update the room
        const updatedRoom = await liveblocks.updateRoom(roomId, {
            usersAccesses: {
                [email]: null
            },
        });

        // revalidate the path to update the cache  
        revalidatePath(`/documents/${roomId}`);
        return parseStringify(updatedRoom);

    } catch (error) {
        console.log(`Error happened while removing a collaborator: ${error}`);
    }

}

export const deleteDocument = async (roomId: string) => {
    try {
        await liveblocks.deleteRoom(roomId);
        revalidatePath('/');
        redirect('/');
    } catch (error) {
        console.log(`Error happened while deleting a room: ${error}`);
    }
}


