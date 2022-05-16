export type Todo = {
    id: Number | String,
    text: string,
    completed: Boolean,
}

export type User = {
    id: String | Number,
    name: {
        first: String,
        last: String
    },
    email: String,
    devices: [
        {
            id: String | Number,
            name: String,
            os: String,
            type: String,
            isLoggedIn: String,
            isDark: Boolean
        }
    ]
}