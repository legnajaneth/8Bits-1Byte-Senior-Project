import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import SurveyComponent from './SurveyComponent'
import {reviewSurveyJson} from '../json'

function WriteReview(props) {

    const writeReviewStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(2px)',
    }

    const writeReviewInnerStyle = {
        display: 'inline-flex',
        width: '40.0625rem',
        height: '36.3125rem',
        padding: '0.75rem 0.75rem',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.625rem',
        borderRadius: '0.9375rem',
        background: 'rgb(240, 254, 240)',
    }

    const writeReviewTextStyle = {
        width: '38.9375rem',
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '140%',
    }

    const buttonContainer = {
        display: 'flex',
        width: '39rem',
        height: '3.3rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: '0.625rem',

    }

    const closeBtnStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.25rem 1.0rem',
        gap: '0.5rem',
        fontStyle: 'normal',
        fontWeight: '600',
        linHeight: '150%',
        background: 'rgb(104, 152, 111)',
        color: 'rgb(17, 22, 17)',
        borderRadius: '8px 8px',
        fontSize: '1rem',

        /*display: 'flex',
        padding: '0.75rem 1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',

        borderRadius: '9.375rem',
        border: '1px solid var(--Black, #060606)',
        background: '#68986f',
        color: 'var(--White, #FFF)',

        color: 'var(--Black, #060606)',
        fontFamily: 'Roboto',
        fontSize: '0.625rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '150%',
        textDecorationLine: 'underline',*/
    }

    return (props.trigger)? (
        <div className="writeReview" style = {writeReviewStyle}>
            <div className="writeReview-inner" style = {writeReviewInnerStyle}>
                <div className="writeReview-text" style = {writeReviewTextStyle}>Adding New Review For:
                    <div className="writeReview-text" style = {writeReviewTextStyle}>Externship Title</div>
                    <div className="scrollableContainer" style={{ maxHeight: '450px', overflowY: 'auto' }}>           
                        <SurveyComponent surveyJson={reviewSurveyJson}/>
                    </div>
                    <div className="buttonContainer" style = {buttonContainer}>
                        <button className="close-btn" style = {closeBtnStyle} onClick={() => props.setTrigger(false)}>Cancel</button>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default WriteReview