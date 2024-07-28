import React from 'react';

type Props = {
    x: number;
    y: number;
};

export function Cursor({ x, y }: Props) {
    return (
        <svg
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: `translateX(${x}px) translateY(${y}px)`,
            }}
            width="48"
            height="48"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path fill="#35c1f1" d="M14,7.054v30.663c0,0.91,1.062,1.407,1.761,0.824l7.078-5.903l4.664,10.728 c0.232,0.533,0.851,0.777,1.384,0.545l1.865-0.811L14.634,6.091C14.276,6.246,14,6.593,14,7.054z"></path>
            <linearGradient id="WfS5LmQ0tdvZnngokC~wKa_DzDNJborQlTB_gr1" x1="21.384" x2="35.554" y1="6.317" y2="39.054" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#46dff9"></stop>
                <stop offset="1" stopColor="#07d6f9"></stop>
            </linearGradient>
            <path fill="url(#WfS5LmQ0tdvZnngokC~wKa_DzDNJborQlTB_gr1)" d="M33.089,40.938l-4.628-10.647l8.1-0.726c0.907-0.081,1.307-1.184,0.663-1.828L15.796,6.31 c-0.336-0.336-0.793-0.379-1.162-0.219l16.118,37.011l1.792-0.779C33.077,42.091,33.321,41.471,33.089,40.938z"></path>
            <path fill="#199be2" d="M33.089,40.938l-4.628-10.647l8.1-0.726c0.907-0.081,1.307-1.184,0.663-1.828L15.796,6.31 c-0.336-0.336-0.793-0.379-1.162-0.219l16.118,37.011l1.792-0.779C33.077,42.091,33.321,41.471,33.089,40.938z"></path>
        </svg>
    );
}