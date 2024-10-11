import React from "react";
import { Text, Heading } from '@chakra-ui/react'
import searchIcon from '../images/search.svg'

function NoActiveSearch(){

    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '74.4vh',
            gap: '2rem',
            paddingBottom: '8rem'
        }}>
             <img src={searchIcon} alt="Search icon" style={{width: '8rem', height: '8rem' }} />
             <div>
                <Heading fontSize='4xl'>No active search</Heading>
                <Text fontSize='3xl' >Type to start a search</Text>
             </div>
             
        </div>
    )

}

export default NoActiveSearch;