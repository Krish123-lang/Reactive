import { Profile, Avatar } from "./Profile";



export function Gallery() {
    return (
        <>
            <section>
                <h1>Amazing scientist</h1>
                <Profile title={"Konichiwa"} />
                <Profile name={"potato"} />
                <Profile age={24} />
                <Avatar person={{ name: "krishna", imageId: "343n43j" }} size={100} />
            </section>
        </>
    )
}

