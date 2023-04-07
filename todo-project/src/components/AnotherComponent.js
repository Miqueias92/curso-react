function AnotherComponent() {
    const handleClick = () => {
        console.log('Clicou no botão')
    };

    return (
        <div>
            <p>Second component</p>
            <button onClick={handleClick}>
                First Event
            </button>
            <hr/>
            <button onClick={()=> console.log("Event in element")}>
                Event in element
            </button>
        </div>
    );
}

export default AnotherComponent;