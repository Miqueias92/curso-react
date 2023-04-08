const RenderCond = () => {
    const x = 10;

    return <div>
        {x > 5 && <p>x is greater than 5</p>}
        {x > 6 ? <p>x is greater than 6</p> : <p> x is greater than 6</p>}
    </div>
}

export default RenderCond;