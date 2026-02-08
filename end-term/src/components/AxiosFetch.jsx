// import React, { useState } from "react";
// import axios from "axios";

// const AxiosFetch = () => {

//     const [data, setData] = useState([]);

//     async function fetchData() {
//         try {

//             // READ (GET)
//             const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//             setData(res.data.slice(0, 5));   // show only 5

//             // CREATE (POST)
//             const newPost = { title: "Hello", body: "Axios Post", userId: 1 };
//             const postRes = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
//             console.log("Post:", postRes.data);

//             // UPDATE (PUT)
//             const updatePost = { title: "Updated", body: "Updated body", userId: 1 };
//             const putRes = await axios.put("https://jsonplaceholder.typicode.com/posts/1", updatePost);
//             console.log("Update:", putRes.data);

//             // DELETE
//             const delRes = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
//             console.log("Delete:", delRes.data);

//         } catch (err) {
//             console.error("Axios Error:", err);
//         }
//     }

//     return (
//         <div>
//             <button onClick={fetchData}>Fetch Data</button>

//             <ul>
//                 {data.map(post => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>

//         </div>
//     );
// };

// export default AxiosFetch;


// import React, { useState } from "react";

// const AxiosFetch = () => {

//     const [data, setData] = useState([]);

//     async function fetchData() {
//         try {
//             const dataRes = await fetch("https://jsonplaceholder.typicode.com/posts");
//             const jsondata = await dataRes.json();
//             setData(jsondata.slice(0, 5));

//             const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ title: "Hello", body: "Fetch Post", userId: 1 })
//             });
//             const postData = await res.json();
//             console.log("Post:", postData);

//             const updateRes = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ title: "Updated", body: "Updated body", userId: 1 })
//             });
//             const updateData = await updateRes.json();
//             console.log("Update:", updateData);

//             const deleteRes = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//                 method: "DELETE"
//             });
//             const deleteData = await deleteRes.json();
//             console.log("Delete:", deleteData);
//         } catch (error) {
//             console.error("Fetch Error:", error);
//         }
//     }

// return (
//     <div>

//         <button style={ {color:  "red", width: "50px"}} onClick={fetchData}>Fetch Data</button>

//         <ul>
//             {data.map(post => (
//                 <li key={post.id}>{post.title}</li>
//             ))}
//         </ul>
//     </div>
// )
// };

// export default AxiosFetch;