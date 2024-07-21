
import { useOthers } from '@liveblocks/react/suspense'
import Image from 'next/image';
import React from 'react'

const ActiveCollaborators = () => {

    const others = useOthers();


    const collabrators = others.map((other) => other.info)

    return (
        <ul className='collaborators-list'>
            {collabrators.map(({ id, avatar, name, color }) => (
                <li key={id}>
                    <Image
                        src={avatar}
                        alt={name}
                        width={40}
                        height={40}
                        className='rounded-full inline-block size-8 ring-2
                        ring-dark-100'
                        style={{ border: `3px solid ${color}` }}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ActiveCollaborators
