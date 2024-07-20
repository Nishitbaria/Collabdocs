"use client";
import CollaborativeRoom from '@/components/CollaborativeRoom'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Documents() {
    return (
        <main className="flex w-full flex-col items-center">
            <CollaborativeRoom
            />
        </main>
    )
}
