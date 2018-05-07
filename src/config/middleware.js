import morgan from "morgan";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import passport from "passport";

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";

export default app => {
  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(passport.initialize());

  if (isDev) {
    app.use(morgan("dev"));
  }

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
  });
};
