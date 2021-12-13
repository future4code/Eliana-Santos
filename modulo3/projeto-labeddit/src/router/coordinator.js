export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignUp = (history) => {
    history.push('/signup')
}

export const goToPost = (history, id) => {
    history.push(`post/${id}`)
}

export const goToFeed = (history, id) => {
    history.push(`/feed/${id}`)
}