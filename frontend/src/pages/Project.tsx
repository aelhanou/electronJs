import { useEffect, useState } from "react";
import { Input, MultiSelect } from "../components";
import useGeolocation from "react-navigator-geolocation";

function Project() {

  const [filialeName, setFilialeName]: [any, any] = useState("")
  const { isEnabled, coords } = useGeolocation();




  return (
    <div className="flex justify-center items-start w-full bg-gray-200">
      <div className="flex justify-center items-start w-[80%] h-[70%] ">
        <div className="w-[80%]">
          <Input setFilialeName={setFilialeName} filialeName={filialeName} label="Maitre d'ouvrage" />
          <Input setFilialeName={setFilialeName} filialeName={filialeName} label="Lot" />
          <Input setFilialeName={setFilialeName} filialeName={filialeName} label="Localisation" />
          
          <MultiSelect />
        </div>

      </div>
    </div>
  )
}

export default Project;