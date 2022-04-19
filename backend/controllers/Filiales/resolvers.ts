import { singleUpload } from "../../middleware/auth";
import { filialeModel } from "../../models/Filiale";
import { Resolvers } from "../../typesGenerated/graphql";

export const resolvers: Resolvers = {
  Query: {
    Filiales: async () => await filialeModel.find()
  },
  Mutation: {
    addFiliale: async (_: any, { input }: any) => {


      const { image } = await input

      console.log(image);

      let { filename, mimetype, encoding } = await singleUpload({ file: image })


      let filialeData = await new filialeModel({ ...input, image: { filename, mimetype, encoding } })
      let result = await filialeData.save()
      console.log(result);

      return result
    },
    deleteFiliale: async (_: any, { id }: any) => {

      let deleteFiliale = await filialeModel.bulkWrite([
        {
          deleteOne: {
            "filter": { _id: id }
          }
        }
      ])

      return deleteFiliale.result.nRemoved ? true : false
    }
  }
};