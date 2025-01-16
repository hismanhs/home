
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const EventLoop = () => {
    const router = useRouter();
    return (
        <>
            <Image src="/eventloop.svg" alt="googleIcon" width={700} height={394} />
            <p>Call Stack: Holds the currently executing function.</p>
            <p>1. Web APIs: Handles asynchronous tasks like setTimeout, fetch, and event listeners. (Contains ALL Call) </p>
            <p>2. Callback Queue: Queues callbacks for asynchronous tasks like setTimeout. ( Second Priority when call Stack is Empty )</p>
            <p>3. Microtask Queue: Holds microtasks like Promise callbacks (.then, .catch, .finally). ( First Priority when call Stack is Empty )</p>
        </>
    );
};

export default EventLoop;
