import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    const fetchProfile = async () => {
        setError(null);  // Clear previous error
        setProfile(null); // Clear previous profile data

        if (username === "") return;

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) throw new Error("User not found");

            const data = await response.json();
            setProfile(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="app">
            <h1>GitHub Profile Finder</h1>

            <div className="search">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                />
                <button onClick={fetchProfile}>Search</button>
            </div>

            {error && <p className="error">{error}</p>}

            {profile && (
                <div className="profile">
                    <img src={profile.avatar_url} alt={profile.name} />
                    <h2>{profile.name}</h2>
                    <p>{profile.bio}</p>
                    <p><strong>Public Repos:</strong> {profile.public_repos}</p>
                    <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile on GitHub
                    </a>
                </div>
            )}
        </div>
    );
};

export default App;
