"use server";

import { CreateDocumentParams, parseStringify } from "@/types";
import { RoomAccesses } from "@liveblocks/node";
import { nanoid } from 'nanoid'
import { liveblocks } from "../liveblock";
import { revalidatePath } from "next/cache";


export async function createDocument({ userId, email }: CreateDocumentParams) {

    const roomId = nanoid();

    try {
        const metadata = {
            creatorId: userId,
            email,
            title: 'untitled',
        }

        const usersAccesses: RoomAccesses = {
            [email]: ['room:write']
        }

        const room = await liveblocks.createRoom(roomId, {
            metadata,
            usersAccesses,
            defaultAccesses: []
        })

        revalidatePath('/');

        return parseStringify(room);

    } catch (error) {
        console.log(`Error happened while creating a room: ${error}`);
    }
}