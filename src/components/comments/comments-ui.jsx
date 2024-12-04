// import React, { useState } from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { CommentRate } from "./comments-rate";
// export function Comments({ type }) {
//   const [value, setValue] = useState({
//     type: type,
//     email: "",
//     message: "",
//     rate: 0,
//     name: "",
//     date: new Date().toDateString(),
//   });

//   const { markdownRemark } = useStaticQuery(graphql`
//     query {
//       markdownRemark(frontmatter: { templateKey: { eq: "comments" } }) {
//         frontmatter {
//           comments {
//             email
//             type
//             message
//             date
//             rate
//             name
//           }
//         }
//       }
//     }
//   `);

//   const [comments, setComments] = useState([
//     ...markdownRemark.frontmatter.comments,
//   ]);

//   const [formError, setFormError] = useState("");

//   async function handleSubmit(e) {
//     e.preventDefault();

//     let erreur = "";
//     if (value.rate <= 0) {
//       erreur = "add a rate";
//     } else {
//       if (value.message.length <= 0 || value.name.length >= 200) {
//         erreur = "invalid message";
//       } else {
//         if (value.email.length <= 0 || value.name.length >= 30) {
//           erreur = "invalid email";
//         } else {
//           if (value.name.length <= 0 || value.name.length >= 30) {
//             erreur = "invalid name";
//           }
//         }
//       }
//     }
//     if (erreur.length > 0) {
//       setFormError(erreur);
//     } else {
//       setComments([value, ...comments]);
//       await fetch("http://localhost:8888/.netlify/functions/addComment", {
//         method: "POST",
//         body: JSON.stringify([value, ...comments]),
//       });
//       setValue({
//         type: type,
//         email: "",
//         message: "",
//         rate: 0,
//         name: "",
//         date: new Date().toDateString(),
//       });
//     }
//   }

//   function setNewRate(value) {
//     setValue((prev) => ({ ...prev, rate: value }));
//   }

//   return (
//     <div className="comments">
//       <div className="comments-list">
//         {comments
//           .filter((item) => item.type === type)
//           .map((item) => {
//             return (
//               <div className="comments-comment">
//                 <CommentRate rate={item.rate} />
//                 <h4 className="comments-comment-name">{item.name}</h4>
//                 <p className="comments-comment-date">{item.date}</p>
//                 <p className="comments-comment-message">{item.message}</p>
//               </div>
//             );
//           })}
//       </div>
//       <div className="comments-form">
//         <form onSubmit={handleSubmit}>
//           {formError.length > 0 && (
//             <p className="comments-form-error">{formError}</p>
//           )}
//           <div className="comments-form-message">
//             <div>
//               <p className="label">Add: </p>
//               <CommentRate newRate={value.rate} setNewRate={setNewRate} />
//             </div>
//             <textarea
//               rows={4}
//               placeholder="Message"
//               value={value.message}
//               onChange={(e) => setValue({ ...value, message: e.target.value })}
//             />
//           </div>

//           <fieldset>
//             <label htmlFor="email">
//               Email:
//               <input
//                 type="email"
//                 id="email"
//                 value={value.email}
//                 onChange={(e) => setValue({ ...value, email: e.target.value })}
//               />
//             </label>
//             <label htmlFor="email">
//               Name:
//               <input
//                 id="name"
//                 type="text"
//                 value={value.name}
//                 onChange={(e) => setValue({ ...value, name: e.target.value })}
//               />
//             </label>
//           </fieldset>

//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </div>
//   );
// }
