// import React from "react";

// export default ({ data }) => {
//   const posts = data.allDesignJson.edges;

//   console.log(posts);

//   return (
//     <div>
//       {posts.map(post => (
//         <div>
//           <h1>{post.node.section.title}</h1>
//           <h2>{post.node.section.subtitle}</h2>

//           {post.node.section.items.map((item, index) => (
//             <div key={index}>
//               <h3>{item.title}</h3>
//               <h4>{item.subtitle}</h4>
//               <img src={item.img} />
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export const query = graphql`
//   query design {
//     allDesignJson {
//       edges {
//         node {
//           section {
//             title
//             subtitle
//             items {
//               title
//               img
//               subtitle
//             }
//           }
//         }
//       }
//     }
//   }
// `;
