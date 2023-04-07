const List = () => {

    const items = [{
        id: 1,
        name: 'Pedro'
    }, {
        id: 2,
        name: 'Maria'
    }, {
        id: 3,
        name: 'Math'
    }];

    return <div>
        { items.map((item) => (
            <p key={item.id}>
                {item.id} - {item.name}
            </p>
        ))}
    </div>
}

export default List;