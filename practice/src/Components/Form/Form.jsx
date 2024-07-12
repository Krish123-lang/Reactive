import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('Male');
    const [subjects, setSubjects] = useState({ english: true, math: false, physics: true });
    const [resume, setResume] = useState('');
    const [url, setUrl] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [about, setAbout] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstname, lastname, email, contact, gender, subjects, resume, url, selectedOption, about
        );
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub]
        }));
    };

    const handleReset = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setContact('');
        setGender('');
        setSubjects({ english: true, math: false, physics: true });
        setResume('');
        setUrl('');
        setSelectedOption('');
        setAbout('');
    };

    return (
        <div className='App'>
            <fieldset>
                <form action="#" method="get">
                    <h1>Form in React</h1>
                    <label htmlFor="firstName">First Name*</label>
                    <input type="text" placeholder='Enter first name' value={firstname} onChange={(e) => setFirstName(e.target.value)} autoComplete='off' required />

                    <label htmlFor="lastName">Last Name*</label>
                    <input type="text" placeholder='Enter last name' value={lastname} onChange={(e) => setLastName(e.target.value)} autoComplete='off' required />

                    <label htmlFor="email">Enter Email*</label>
                    <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' required />

                    <label htmlFor="contact">Contact*</label>
                    <input type="number" placeholder='Enter phone number' value={contact} onChange={(e) => setContact(e.target.value)} autoComplete='off' required />

                    <label htmlFor="gender">Gender*</label>
                    <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} /> Male
                    <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} /> Female
                    <input type="radio" name="gender" value="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} /> Other

                    <label htmlFor="subject">Your best Subject*</label>
                    <input type="checkbox" name="english" checked={subjects.english} onChange={() => handleSubjectChange("english")} /> English
                    <input type="checkbox" name="math" checked={subjects.math} onChange={() => handleSubjectChange("math")} /> Math
                    <input type="checkbox" name="physics" checked={subjects.physics} onChange={() => handleSubjectChange("physics")} /> Physics

                    <label htmlFor="resume">Upload Resume*</label>
                    <input type="file" name="resume" onChange={(e) => setResume(e.target.files[0])} required />

                    <label htmlFor="url">URL*</label>
                    <input type="text" name="url" placeholder='Enter URL' value={url} onChange={(e) => setUrl(e.target.value)} autoComplete='off' required />

                    <label htmlFor="choice">Select your choice*</label>
                    <select name="select" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                        <option value="" disabled>Select your Ans</option>
                        <optgroup label="Beginners">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>

                    <label htmlFor="about">About*</label>
                    <textarea name="about" placeholder='About yourself' value={about} onChange={(e) => setAbout(e.target.value)} autoComplete='off' required></textarea>

                    <h3>Submit OR Reset</h3>
                    <button type='reset' onClick={handleReset}>Reset</button>
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                </form>
            </fieldset>
        </div>
    );
};

export default Form;
