import React from 'react';

function Pagination({ postsPerPage, totalPosts, paginate, currentPage, setCurrentPage, onClick, isSelected}) {

    const paginationStyle = {
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: '0.625rem' 
    }

    const buttonsStyle = {
        display: 'flex',
        padding: '0.375rem 1.0625rem',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.625rem',
        borderRadius: '6.25rem',
        backgroundColor: "#68986f40",

        color: '#000',
        fontFamily: 'Product Sans',
        fontSize: '0.875rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '1.6875rem' /* 192.857% */
    }
    
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="pagination" style={paginationStyle}>
                {pageNumbers.map(number => (
                    <div key={number} className="page-item">
                        <button style={buttonsStyle} onClick={() => paginate(number)} 
                            href="results" 
                            className="page-link">
                                {number}
                        </button>
                    </div>
                ))}
                <button style={buttonsStyle} onClick={() => paginate(currentPage + 1)} 
                    href="results" 
                    className="page-link">
                        Next
                </button>
            </ul>
        </nav>
    );
}

export default Pagination