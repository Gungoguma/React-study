import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
    return (
        <div>
            <h1>안녕하세요</h1>
            <p style={{color : "red"}}>인라인 스타일입니다</p>
            <Link
                to="/"
                >
                돌아가기
            </Link>
        </div>
    );
};

export default Page1