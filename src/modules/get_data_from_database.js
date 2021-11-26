export async function getFromDatabase(path) {
    try {
        const response = await fetch(`https://book-store-e9483-default-rtdb.firebaseio.com/${path}.json`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const bookData = await response.json();
        return bookData;
    } catch (e) {
        throw new Error(e.message);
    }
}