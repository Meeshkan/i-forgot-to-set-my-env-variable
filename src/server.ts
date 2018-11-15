import debug from "debug";
import express from "express";
import _ from "lodash";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
    const feedback = [
        "Thanks for the free credentials. We just used them to hack your production environment.",
        "Your unconditional optimism about the future is inspiring.",
        "This joke is unfunny.",
        "You needed for this to happen to you so that you could hit rock bottom. Don't worry.",
        "You deserve better than this.",
        "Testing is overrated.",
    ];
    res.send(_.sample(feedback));
});

const port = process.env.PORT || 3000;
app.listen(3000, () => debug("i:forgot")(`listening on port ${port}!`));
