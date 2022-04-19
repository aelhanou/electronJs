import { FC, useState } from "react"
import { Input, TeaxtArea, Upload } from "../components"
import { useAddFilialeMutation } from "../generated"
import { fetchFormData } from "../hooks/upload"
import { FilialeInput } from "../generated/index"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;


export const Home: FC = () => {
  const [files, setFiles]: [any, any] = useState([])
  const [name, setName] = useState(true)
  const [filialeName, setFilialeName]: [any, any] = useState("")
  const [filialeDescription, setFilialeDescription]: [any, any] = useState("")
  const navigate = useNavigate()



  // const { mutate } = useAddFilialeMutation()

  const addFiliale = async () => {
    setName(false)


    const file = files.map((e: any) => e.file)


    console.log(file);
    const operations = {
      query: `mutation addFiliale($description:String!,$name:String!,$file: Upload) {
        addFiliale(input: {
          description: $description,
          name: $name,
          image : $file
        }) {
          id
          name
          description
          image {
            filename
            mimetype
            encoding
          }
        }
              }`,
      variables: {
        description: filialeDescription,
        name: filialeName,
      },
    };
    const [data, error] = await fetchFormData(operations, "variables.file", file, "");

    if (data.data?.addFiliale?.name) {
      setName(true)
      toast("Filiale added successfully")
      navigate("/getFiliales")
    }


  }
  return (
    <div className="w-full flex flex-col h-screen items-center justify-center bg-gray-200 text-black">
      <div className="flex justify-center h-44 items-center text-8xl gap-3 w-full  rounded text-white bg-gradient-to-r  from-teal-400 via-teal-500 to-teal-600   mb-10" >
        FILIALES
      </div>
      <div className="flex flex-col gap-3 w-[50%] h-[70%]  ">
        <Input setFilialeName={setFilialeName} filialeName={filialeName} label="Filiale" />
        <TeaxtArea setFilialeDescription={setFilialeDescription} filialeDescription={filialeDescription} />
        <Upload setFiles={setFiles} files={files} />
        {name ?
          <button
            onClick={() => addFiliale()}
            type="button"
            className="text-white outline-none focus:border-0 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Send
          </button>
          :
          <div
            className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2"

          >
            <ClipLoader css={override} size={33} />
          </div>
        }
      </div>
    </div>
  )
}

