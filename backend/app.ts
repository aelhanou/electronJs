import express from "express"
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from "./typeDefs";
import { resolvers } from "./controllers";
import { DB } from "./config/database";
import { graphqlUploadExpress } from "graphql-upload";
import { getUser } from "./middleware/auth";
import fs from "fs"
import path from "path"
import cors from "cors"
// https://github.com/electron/electron/releases/download/v18.0.3/electron-v18.0.3-linux-x64.zip

const app = express();


// app.use(express.static(__dirname + "/public"));


app.use(cors({
  origin: "*"
}))

app.use("/images/:id", async (req, res) => {
  const { id } = req.params

  let isExist = fs.readdirSync(path.join(__dirname, "public/Images")).includes(id)
  if (isExist) {
    const imageStreaming = fs.createReadStream(path.join(__dirname, "public/Images/" + id));
    imageStreaming.pipe(res);
  } else {
    res.status(400).send("This Image is not Exist")
  }
})


const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: ({ req }) => {

    const token = req.get('Authorization') || ''
    const user = getUser(token.replace('Bearer', ''))
    if (token) {
      if (user?.tokenExpired | user?.tokenInvalid) {
        if (user?.tokenExpired) {
          return { user: "Token Expired" }
        } else {
          return { user: "Invalid Token" }
        }
      } else {
        return { user }
      }
    }
    return { user: "token not exist" }

  },
});

(async () => {
  await DB()
  await server.start();

  app.use(graphqlUploadExpress())
  server.applyMiddleware({ app })

  await new Promise<void>(r => app.listen({ port: 4000 }, r));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  // const { url } = await server.listen();

  // console.log(`Server ready at ${url}`);
})();