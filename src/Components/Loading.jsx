import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Loading = () => {
    const { loading } = use(AuthContext);

    if (loading) {
        return <span className="loading loading-bars loading-xl"></span>
    }
};

export default Loading;