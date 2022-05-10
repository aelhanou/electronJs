import React from 'react'
import CSVReader from 'react-csv-reader'
import { GeneratedFilaile } from '../components'


export const Import = () => {



    return (
        <>
            <CSVReader
                parserOptions={{ header: true }}
                onFileLoaded={(data, fileInfo) => console.log(data, fileInfo)}
            />

            <GeneratedFilaile />
        </>
    )
}
