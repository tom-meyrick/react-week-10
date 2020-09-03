import axios from "./axiosConfig";

axios.get("/articles").then(({ data }) => console.log(data.data));

// axios.post("/articles", {
//   title: "Hello",
//   content: "World",
//   tags: ["cabin", "fever"],
// });

axios.get("/articles").then(({ data }) =>
  console.log(
    data.data.map((article) => {
      return article.id;
    })
  )
);

axios.patch("/articles/41", {
  title: "Hello",
  content: "World",
  tags: ["cabin", "fever", "table"],
});

axios.get("/articles/41").then(({ data }) => console.log(data.data.tags));

axios.get("/articles/41").then(({ data }) => console.log(data.data));

axios.get("/articles/1000").then(
  (response) => {
    console.log("Everything has worked");
  },
  (error) => {
    console.log(error);
    console.log("Not found");
  }
);

axios.get("/articles").then(({ data }) =>
  console.log(
    data.data.map((article) => {
      return article.title;
    })
  )
);

// axios
//   .get("/articles")
//   .then(({ data }) => console.table(data.data.map((article) => {})));
