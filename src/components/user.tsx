const user = {
    name: 'Thedy',
    lastName: 'Wender',
}

function User() {
    return <span>{`${user.name} ${user.lastName}`}</span>
}

export default User;