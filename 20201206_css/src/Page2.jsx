import React from 'react';
import { Link } from 'react-router-dom';

const Page2 = () => {
    const pstyle = {
        color: "red",
        backgroundColor: "gray",
        lineHeight: "40px"
    }
    return (
        <div>
            <h1>안녕하세요</h1>
            <p style={pstyle}>javascript object입니다</p>
            <Link
                to="/"
                >
                돌아가기
            </Link>
        </div>
    );
}

export default Page2