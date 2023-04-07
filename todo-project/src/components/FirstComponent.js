import AnotherComponent from "./AnotherComponent";

function FirstComponent() {
    // any comment
    const name = "Miqueias";

    return (
        <div className="first-component">
            {/* any comment in jsx */}
            <p>First Component</p>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name"></input>
            {/* template expression */}
            {2 + 2}

            <p>Name: {name}</p>
            <AnotherComponent/>
        </div>
    )
}

export default FirstComponent;