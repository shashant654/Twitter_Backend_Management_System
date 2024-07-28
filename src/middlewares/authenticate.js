import passport from "passport";

export const authenticate = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err) return next(err);
    if (!user) {
      console.error("JWT Middleware: Unauthorized access attempt");
      return res.status(401).json({
        message: "Unauthorized access",
      });
    }
    req.user = user;
    console.log("JWT Middleware: User authenticated", user);
    next();
  })(req, res, next);
};

// import passport from "passport";

// export const authenticate = (req, res, next) => {
//   passport.authenticate("jwt", (err, user) => {
//     if (err) next(err);
//     if (!user) {
//       return res.status(401).json({
//         message: "Unauthorised access",
//       });
//     }
//     req.user = user;
//     next();
//   })(req, res, next);
// };
