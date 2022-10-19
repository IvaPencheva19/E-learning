const request = async (method, url, data) => {
    try {
        let requestBuilder;

        if (method === "GET") {
            requestBuilder = fetch(url);

        } else {

            requestBuilder = fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        }

        const response = await requestBuilder;
        const result = response.json();
        
        return result;
    } catch (error) {

    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');
