function Room(){
    const Room1 = "Public";
    const Room2 = "Private"

    return(
        <ul>
            <li> Global </li>
            <li>{Room1}</li>
            <li> {Room2}</li>

        </ul>
    )
}

export default Room