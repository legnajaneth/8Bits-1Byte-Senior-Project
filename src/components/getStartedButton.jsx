import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

function GetStartedButton() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                checkSubscription(currentUser.uid);
            } else {
                setLoading(false);
            }
        });
    }, [navigate]);

    const checkSubscription = async (uid) => {
        const docRef = doc(getFirestore(), 'users', uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().subscriber) {
            setIsSubscribed(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (!loading) {
            if (isSubscribed) {
                navigate('/resultpage');
            } else if (user) {
                navigate('/surveyplanpage');
            } else {
                navigate('/login');
            }
        }
    }, [loading, isSubscribed, user, navigate]);

    const handleGetStartedClick = () => {
        if (loading) {
            // If still loading, do nothing
            return;
        }
        // The navigation logic is handled in the useEffect
    };

    const renderButtonContent = () => {
        if (loading) return 'Loading...';
        if (isSubscribed) return 'Go to Results';
        return 'Get Started';
    };

    const buttonStyle = {
        display: 'flex',
        padding: '1.5em 3em',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5em',
        border: '1px solid var(--Black, #060606)',
        color: 'var(--Black, #060606)',
        marginTop: '7em',
        marginLeft: '5em',
    };

    return (
        <button className="getStarted" style={buttonStyle} onClick={handleGetStartedClick} disabled={loading}>
            {renderButtonContent()}
        </button>
    );
}

export default GetStartedButton;
