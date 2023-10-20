const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const cors = require("cors");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, `utf-8`));

const DB = process.env.DATABASE_INITIAL.replace(
  "<PASSWORD>",
  process.env.DB_PASSWORD
);

const port = process.env.PORT || 5000;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log(`DB conencted successfuly:`);
  });

// {
//   title: "Beyond Earth",
//   thumbnail: {
//     trending: {
//       small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
//       large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
//     },
//     regular: {
//       small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
//       medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
//       large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
//     },
//   },
//   year: 2019,
//   category: "Movie",
//   rating: "PG",
//   isBookmarked: false,
//   isTrending: true,
// },

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "No title"],
  },
  thumbnail: {
    type: {},
    required: [true, "No thumbnail"],
  },
  year: {
    type: Number,
    required: [true, "No year"],
  },
  category: {
    type: String,
    required: [true, "No category"],
  },
  rating: {
    type: String,
    required: [true, "No rating"],
  },
  isBookmarked: {
    type: Boolean,
    required: [true, "No isBookmarker"],
  },
  isTrending: {
    type: Boolean,
    required: [true, "No isTrending"],
  },
});

const Content = mongoose.model("Movie", contentSchema);

const importData = async () => {
  try {
    // .create() function can also accept array of objects
    // => it will create document for each object in an array
    await Content.create(data);
    console.log("Data successfully loaded!");
    // -
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// importData();

console.log("DATABSE DATA TYPE", typeof data);

const getData = async () => {
  try {
    const data = await Content.find();

    return data;

    // res.status(200).json({
    //   status: 'success',
    //   requestedAt: req.requestTime,
    //   results: tours.length,
    //   data: {
    //     tours
    //   }
    // });
  } catch (err) {
    // res.status(404).json({ status: 'Fail', message: err });
  }
};

app.get("/api/v1", (req, res) => {
  //

  getData().then((data) => {
    res.status(200).json({ status: "success", data: data });
  });
});

app.get("/api/v1/content/:type", (req, res) => {
  const getMovies = async () => {
    const data = await Content.find({ category: "Movie" });

    return data;
  };
  const getSeries = async () => {
    const data = await Content.find({ category: "TV Series" });

    return data;
  };
  const getBookmarked = async () => {
    const data = await Content.find({ isBookmarked: true });

    return data;
  };
  //
  const type = req.params.type;

  console.log("type", type);

  if (type === "movies") {
    //
    getMovies().then((data) => {
      console.log("Movie DATA");

      res.status(200).json({
        status: "success",
        data: data,
      });
    });
    //
  } else if (type === "series") {
    //
    getSeries().then((data) => {
      console.log("Series DATA");

      res.status(200).json({
        status: "success",
        data: data,
      });
    });
  } else if (type === "bookmark") {
    //
    getBookmarked().then((data) => {
      console.log("Bookmarked DATA", data);

      res.status(200).json({
        status: "success",
        data: data,
      });
    });
  }
});

app.patch("/api/v1/", (req, res) => {
  console.log("req body", req.body);
  // const patchData = async () => {
  //   const data = await Content.findByIdAndUpdate(req.body.id, req.body);

  //   return data;
  // };

  // patchData().then((res) => {
  //   console.log("patchData res", res);
  // });

  res.status(200).json({
    status: "success",
  });
});

app.listen(port, () => {
  console.log("Server listening...");
});
