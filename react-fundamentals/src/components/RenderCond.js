//const RenderCond = (props)
const RenderCond = ({x, y}) => {
    return <div>
        {/* access props value props.x */}
        {x > 5 && <p>x is greater than 5</p>}
        {x > 6 ? <p>x is greater than 6</p> : <p> x is less than 6</p>}
        <p>Y value is: {y}</p>
    </div>
}

export default RenderCond;