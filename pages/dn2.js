import React, { useState } from 'react';
import './dn2.css';
/* function highlightNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks) {
        navLinks.forEach(link => {
            link.classList.add('highlight');
        });
    }
} */

function Dn2() {
    // State to manage the visibility of the donation form
    const [showForm, setShowForm] = useState(false);

    // Function to toggle the visibility of the donation form
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="donation-container">
            <h1>Make a Donation</h1>

            <button onClick={toggleForm}>Donate Now <i>&rarr;</i></button>

            {showForm && (
                <form id="donationForm">
                    <label htmlFor="amount">Amount:</label>
                    <input type="text" id="amount" name="amount" required /><br /><br />

                    <label htmlFor="Location">Location:</label>
                    <input type="text" id="Location" name="Location" required /><br /><br />

                    <label htmlFor="donorName">Your Name:</label>
                    <input type="text" id="donorName" name="donorName" required /><br /><br />

                    <button type="submit">Submit Donation</button>
                </form>
            )}
        </div>
    );
}

export default Dn2;
