export function Profile() {
    return (
        <div>
            <h2><u>Profile Card</u></h2>
            <ProfileCard
                name="Alice"
                age={24}
                greeting={
                    <strong>Hi Alice, Have a nice day</strong>
                }>
                <p>Hobbies: Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>

            <ProfileCard
                name="Bob"
                age={20}
                greeting={
                    <strong>Hi Bob, Have a nice day</strong>
                }>
                <p>Hobbies: Cooking, Gaming</p>
                <button>Subscribe</button>
            </ProfileCard>
        </div>
    )
}

function ProfileCard({ name, age, greeting, children }) {
    return (
        <>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <div>{greeting}</div>
            <div>{children}</div>
        </>
    )
}