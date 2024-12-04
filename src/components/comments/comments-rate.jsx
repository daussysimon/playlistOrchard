// import React, { useCallback, useState } from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";

// import "../../styles/components/comment.scss";

// export function CommentRate({ rate, newRate, setNewRate }) {
//   const starNumber = [1, 2, 3, 4, 5];
//   const [currentRate, setcurrentRate] = useState(!rate ? 0 : rate);

//   const handleOver = (item) => {
//     if (!rate) {
//       setcurrentRate(item);
//     }
//   };

//   const handleClick = (item) => {
//     if (!rate) {
//       setNewRate(item);
//     }
//   };

//   const handleLeave = (item) => {
//     setcurrentRate(0);
//   };
//   const color = useCallback(
//     (index) => {
//       if (rate) {
//         if (rate >= index) {
//           return "black";
//         } else {
//           if (newRate) {
//             if (newRate >= index) {
//               return "black";
//             } else {
//               return "#e7e4e4";
//             }
//           } else {
//             return "#e7e4e4";
//           }
//         }
//       } else {
//         if (currentRate >= index) {
//           return "black";
//         } else {
//           if (newRate) {
//             if (newRate >= index) {
//               return "black";
//             } else {
//               return "#e7e4e4";
//             }
//           } else {
//             return "#e7e4e4";
//           }
//         }
//       }
//     },
//     [currentRate, rate, newRate]
//   );

//   return (
//     <div className="rate-container">
//       {starNumber.map((item) => (
//         <div
//           className="icon-container"
//           onMouseOver={() => handleOver(item)}
//           onMouseLeave={() => handleLeave(item)}
//         >
//           <FontAwesomeIcon
//             onClick={() => handleClick(item)}
//             icon={faStar}
//             style={{ color: color(item) }}
//             size={rate ? "sm" : "lg"}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
