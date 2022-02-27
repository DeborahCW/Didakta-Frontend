import axios from "axios";

const lessonsUrl = `http://localhost:4000/lesson/`;

// export const fetchAllLessons = async () => {
//   try {
//     const { data } = await axios.get(lessonsUrl);
//     return { __html: data.data };
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const dfger = () => {
//   axios
//     .get(lessonsUrl)
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => console.log(err));
// };
