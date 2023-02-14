import express, { Express } from "express";
import { router } from "./routes/defaultRouter";
import bodyParser from "body-parser";

export class App {
  private app: Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 3001;
  }

  public init(staticPath: string) {
    // Middleware
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    // Routes
    this.app.use(router);

    // Static data
    this.app.set("view engine", "pub");
    this.app.use(express.static(staticPath));

    this.app.listen(this.port, () =>
      console.log(`Server starts on http://localhost:${this.port}`)
    );
  }
}

export const app = new App();
