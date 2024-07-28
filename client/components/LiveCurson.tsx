import React from 'react';
import { useMyPresence, useOthers } from "@liveblocks/react/suspense";
import { Cursor } from "./Cursor";

export default function LiveCursor() {
    const [myPresence, updateMyPresence] = useMyPresence();
    const others = useOthers();
    console.log(others);
    console.log(myPresence);

    function handlePointerMove(e: React.PointerEvent) {
        const cursor = { x: Math.floor(e.clientX), y: Math.floor(e.clientY) };
        updateMyPresence({ cursor });
    }

    function handlePointerLeave() {
        updateMyPresence({ cursor: null });
    }

    return (
        <div
            className="fixed inset-0 pointer-events-none"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
        >
            {others
                .filter((other) => other.presence.cursor !== null)
                .map(({ connectionId, presence }) => (
                    <Cursor
                        key={connectionId}
                        x={presence.cursor?.x || 0}
                        y={presence.cursor?.y || 0}
                    />
                ))}
        </div>
    );
}