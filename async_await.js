function fetchData() {
    return new Promise((resolve, reject) => {
        let success = false;
        if (success) {
            resolve({
                id: 73676463866487,
                username: 'John Doe'
            })
        }
        else {
            reject(new Error("Data not Fetched"))
        }
    })
}

async function getUser() {
    try {
        const user = await fetchData()
        console.log(user)
    } catch (error) {
        console.log(error.message)
    }
}

getUser()