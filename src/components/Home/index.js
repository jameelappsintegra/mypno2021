import React from 'react'
import MainTitle from '../MainTitle'
import Post from '../Post'

const Home = () => {
    return (
        <React.Fragment>
            <MainTitle title={'Home'} />
            <Post />
        </React.Fragment>
    )
}

export default Home