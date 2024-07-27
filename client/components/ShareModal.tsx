"use client";
import { useSelf } from '@liveblocks/react/suspense';
import React, { useState, useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';
import Image from 'next/image';
import { Label } from './ui/label';
import { Input } from './ui/input';
import UserTypeSelector from './UserTypeSelector';
import Collaborator from './Collaborator';
import { updateDocumentAccess } from '@/lib/actions/room.actions';
import toast from 'react-hot-toast';

export default function ShareModal({ roomId, collaborators, creatorId, currentUserType }: ShareDocumentDialogProps) {
    const user = useSelf()

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [userType, setUserType] = useState<UserType>('viewer');

    const shareDocumentHandler = async () => {
        setLoading(true);

        try {
            const updateddoc = await updateDocumentAccess({
                roomId,
                email,
                userType,
                updatedBy: user.info
            });


            if (updateddoc === undefined) {
                throw new Error('User is not found please try again');
            }

            toast.success('User invited successfully!');
        } catch (error) {
            console.error(error);
            toast.error('User is not found please try again');
        } finally {
            setLoading(false);
        }
    }



    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button
                    disabled={currentUserType !== 'editor'}
                    className='gradient-blue flex gap-1 px-4 h-9'>
                    <Image
                        src={'/assets/icons/share.svg'}
                        alt='Share'
                        width={20}
                        height={20}
                        className='min-w-4 md:size-5'
                    />
                    <p className='mr-1 hidden sm:block'>
                        Share
                    </p>
                </Button>
            </DialogTrigger>

            <DialogContent className='shad-dialog'>
                <DialogHeader>
                    <DialogTitle>Manage who can view this project</DialogTitle>
                    <DialogDescription>
                        Select the people you want to share this project with
                    </DialogDescription>
                </DialogHeader>
                <Label htmlFor='email' className='text-blue-100'>
                    Email Address
                </Label>
                <div className='flex items-center gap-3'>
                    <div className='flex flex-1 rounded-md bg-dark-400'>
                        <Input
                            id='email'
                            placeholder='Enter Email Address'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='share-input'
                        />
                        <UserTypeSelector
                            userType={userType}
                            setUserType={setUserType}
                        />
                    </div>
                    <Button
                        type='submit'
                        onClick={shareDocumentHandler}
                        className='gradient-blue flex h-full gap-1 px-5'>
                        {loading ? 'Sharing...' : 'Invite'}
                    </Button>
                </div>

                <div className='my-2 space-y-2'>
                    <ul className='flex flex-col'>
                        {collaborators.map((collaborator) => (
                            <Collaborator
                                key={collaborator.id}
                                roomId={roomId}
                                creatorId={creatorId}
                                email={collaborator.email}
                                collaborator={collaborator}
                                user={user.info}
                            />
                        ))}
                    </ul>
                </div>
            </DialogContent>
        </Dialog>
    )
}