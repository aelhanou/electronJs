import React, { useState } from 'react'
import { CSVDownload, CSVLink } from "react-csv";

export const GeneratedFilaile = () => {
    const [value, setValue] = useState("0")
    const [data, setData] = useState([])
    const [generate, setGenerate] = useState(false)
    // images : https://random.imagecdn.app/500/150
    // names : https://random-word-api.herokuapp.com/word
    // description: https://litipsum.com/api/adventures-sherlock-holmes/15
    const csvData = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
    ];
    const generatedFilaile = async () => {
        let data: any = []
        let name: any = []
        let description: any = []

        // const fetchData = async (i: number) => {
        //     let fetchFullName = await fetch("https://random-word-api.herokuapp.com/word")
        //     let fullName = await fetchFullName.json()
        //     let fetchdescription = await fetch("https://litipsum.com/api/adventures-sherlock-holmes/" + i)
        //     let description = await fetchdescription.json()

        //     return {
        //         fullName,
        //         description,
        //         image: "https://random.imagecdn.app/500/150"
        //     }
        // }
        if (+value < 15) {


            for (let i = 0; i < 3; i++) {
                name.push(fetch("https://random-word-api.herokuapp.com/word"))
                description.push(fetch("https://litipsum.com/api/adventures-sherlock-holmes/" + i))
            }
            Promise.all([...name, ...description]).then((res: any) => {
                return Promise.all(res.map((e: any) => {
                    if (e.headers.get("content-type") == "application/json") {
                        return e.json()
                    }
                    // else {
                    //     return e.text()
                    // }
                }
                ))
            }).then((data: any) => {
                setData(data.filter((e: any) => e))
                console.log(data.filter((e: any) => e));

                setGenerate(true)
            })
            // Promise.all(description).then((res: any) => {
            //     return Promise.all(res.map((e: any) => e.text()))
            // }).then((data) => {
            //     console.log(data);
            // })


        } else {
            alert("Max is 15")
        }
    }

    return (
        <div className='flex flex-col w-full justify-center items-center '>
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

            {
                generate && <CSVLink data={data}>Download me</CSVLink>
                // <CSVDownload data={data} target="_blank" />
            }

            <button onClick={() => generatedFilaile()}>Click To Generete Filailes</button>
        </div>
    )
}
