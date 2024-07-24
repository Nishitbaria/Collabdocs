'use client';

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import ActiveCollaborators from './ActiveCollaborators';
import Image from 'next/image';
import Loader from './Loader';
import { useEffect, useRef, useState } from 'react';
import { Input } from './ui/input';
import { updateDocument } from '@/lib/actions/room.actions';

const CollaborativeRoom = ({ roomId, roomMetadata, users, currentUserType }: CollaborativeRoomProps) => {






    const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // update title handler

    const updateTitleHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {

        // if the key is enter then update the title of the document
        if (e.key === "Enter") {
            setLoading(true);

            try {
                // if the title is not the same then to enter in the if else block
                if (documentTitle !== roomMetadata.title) {

                    // update the title of the document
                    const updatedDocument = await updateDocument(roomId, documentTitle);


                    // if the document is updated then set the editing to false
                    if (updatedDocument) {
                        setEditing(false);
                    }

                }
                setLoading(false);

            } catch (error) {
                console.log(`Error happend while updating the title of the document: ${error}`)
            }



        }
    }


    // this useEffect is used to handle the click outside the input field
    useEffect(() => {
        // below cod is used to handle the click outside the input field
        const handleClickOutside = (e: MouseEvent) => {

            // if the container ref is not null and the target is not the child of the container ref then set the editing to false

            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setEditing(false);
                // update the title of the document
                updateDocument(roomId, documentTitle);
            }
        }
        // add the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }


    }, [roomId, documentTitle])

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editing])

    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<Loader />}>
                <div className="collaborative-room">
                    <Header>


                        <div ref={containerRef} className='flex items-center justify-center gap-2 w-full'>
                            {editing && !loading ? (<Input
                                type='text'
                                value={documentTitle}
                                ref={inputRef}
                                placeholder='Document Title'
                                onChange={(e) => setDocumentTitle(e.target.value)}
                                onKeyDown={updateTitleHandler}
                                className="document-title-input"
                                disabled={!editing}
                            />) : (
                                <p className='font-bold ring-2'>
                                    {documentTitle}
                                </p>
                            )}
                            {currentUserType === 'editor' && !editing && (
                                <Image
                                    src="/assets/icons/edit.svg"
                                    alt="edit"
                                    width={24}
                                    height={24}
                                    onClick={() => setEditing(true)}
                                    className="pointer"
                                />
                            )}
                            {currentUserType !== 'editor' && !editing && (
                                <p className="view-only-tag">View only</p>
                            )}

                            {loading && <p className="text-sm text-gray-400">saving...</p>}
                        </div>
                        <div className="flex w-full flex-1 justify-end gap-2 sm:gap-3">
                            <ActiveCollaborators />


                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </Header>
                    <Editor roomId={roomId} currentUserType={currentUserType} />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom