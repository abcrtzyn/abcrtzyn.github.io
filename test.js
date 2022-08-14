console.log("hello world");
url = "https://p60-caldav.icloud.com/published/2/ODIwMTM3MTA3ODIwMTM3MdvXD6L-PnohlMX1UwkfaWjVC8HNcRfoUTXvHHR50gKn5N8tx0Jpmc8he5VhPEHsoM1Tuh27jsumfqOTUEbtqq8";
headers = {};

a = fetch(url,{
    method: "GET",
    mode: 'cors',
    headers: headers
}).then((response) => {
    if(!response.ok) {
        throw new Error(response.error)
    }
    console.log(response)
    return response
}).catch(function(error) {
    console.error(error);
});