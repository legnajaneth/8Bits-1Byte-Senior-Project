import React from "react";
import { Text, Heading } from '@chakra-ui/react'
import pageSearch from '../images/page-search.svg'

function SearchResultPlaceholder({searchTerm}){

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
             <img src={pageSearch} alt="pageSearch icon" style={{width: '8rem', height: '8rem' }} />
             <div>
                <Heading fontSize='4xl'>No results found for "{searchTerm}"</Heading>
                <Text fontSize='3xl' >Check your spelling and try again</Text>
             </div>
             
        </div>
    )

}

export default SearchResultPlaceholder;