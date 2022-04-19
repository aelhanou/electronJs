import { FC, useEffect, useState } from "react";
import { useDeleteFilialeMutation, useGetFilialesQuery } from "../generated";



export const GetFiliales: FC<any> = () => {
  const [filiales, setFiliales] = useState([])
  const [refetching, setRefetching] = useState(false)
  const { data, refetch }: any = useGetFilialesQuery()
  const { mutate } = useDeleteFilialeMutation()


  useEffect(() => {
    if (data) {
      setFiliales(data.Filiales)
      console.log(data);
    }

  }, [filiales, data, refetching])

  // useEffect(() => {

  //   const refetching = async () => {
  //     let yo = await refetch()
  //     console.log(yo);
  //   }
  //   refetching()
  // }, [])


  const deleteFiliale = async (id: any) => {

    mutate({ id: id })
    let { isSuccess } = await refetch()
    setRefetching(isSuccess)
    setFiliales([])
  }



  return (
    <div className="w-full h-screen bg-gray-300 text-black ">
      <div className="h-[99.5vh] flex flex-col gap-6 overflow-y-scroll">
        {filiales && filiales.map((e: any, i) => {
          return (
            <div key={e.id} className="w-full flex-col  p-4   ">
              <div className="flex w-full">
                <h1 className="text-xl w-full text-center mb-4 text-red-700 font-bold ">{e.name}</h1>
                <img onClick={() => deleteFiliale(e.id)} className="flex mr-5 w-10 mb-5 h-10 items-center justify-center" src="/images/delete.png" alt="delete" />
              </div>
              <div className={i % 2 ? "flex gap-4   " : " flex  gap-4 flex-row-reverse"}>
                <h1 className="text-lg  ">{e.description}</h1>
                <img className="h-36 w-64 rounded-xl " src={"http://localhost:4000/images/" + e.image.filename} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GetFiliales;