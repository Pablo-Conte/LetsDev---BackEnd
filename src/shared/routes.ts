import { Router } from "express";
import { booksRoutes } from "./routes/books.routes";
import { booksStoreRoutes } from "./routes/bookstore.routes";
import { emailsRoutes } from "./routes/emails.routes";
import { sessionRoutes } from "./routes/session.routes";
import { userRoutes } from "./routes/user.routes";

const routesIndex = Router();

routesIndex.use("/users", userRoutes);
routesIndex.use("/sessions", sessionRoutes);
routesIndex.use("/book", booksRoutes);
routesIndex.use("/bookstore", booksStoreRoutes);
routesIndex.use("/emails", emailsRoutes);

export { routesIndex };
