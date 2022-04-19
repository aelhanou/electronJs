
export const fetchFormData = async (operations: any, input: string, files: any, token: any) => {
    const formdata = new FormData();

    // const map = files.reduce((acc: any, cur, idx: any) => (acc[idx] = [`${input}.${idx}`]) && acc, {});

    formdata.append("operations", JSON.stringify(operations));
    formdata.append("map", JSON.stringify({
        "0" : [`${input}`]
    }));
    // files.forEach((item, key) => formdata.append(key.toString(), item));
    formdata.append("0", files[0]);

    const requestOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formdata,
    };

    try {
        const response = await fetch("http://localhost:4000/graphql", requestOptions);
        const data = await response.json();
        return [data, data?.errors];
    } catch (error) {
        return [null, "something went wrong"];
    }
};