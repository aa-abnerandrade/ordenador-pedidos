
export async function getFileData(url) {
    return await fetch(url)
        .then( (response)=> response.json());
}
