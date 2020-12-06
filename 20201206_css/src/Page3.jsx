import React from 'react';
import { Link } from 'react-router-dom';
import './Page3.css';

const Page3 = () => {
    return (
        <div>
            <h1>안녕하세요</h1>
            <h2>CSS Stylesheet입니다</h2>
            <p className="pstyle"> className입니다</p>
            <Link
                to="/"
                >
                돌아가기
            </Link>
        </div>
    );
}

export default Page3