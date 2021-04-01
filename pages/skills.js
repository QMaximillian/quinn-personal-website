// import Head from 'next/head'
// import skills from '../skills.json'

// export default function Skills() {
//   return (
//     <>
//       <Head>
//         <title>Skills</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className="mt-5 w-full">
//         <div className="text-2xl md:text-4xl text-green-300 underline">
//           Skills
//         </div>
//         {skills.map((skill) => {
//           return (
//             <div className="text-lg sm:text-2xl text-white" key={skill.name}>
//               <div className="">{skill.name}</div>
//               <div className="">
//                 {skill.frameworks?.map((framework, i) => (
//                   <span
//                     key={framework}
//                     className=" text-yellow-500 first:pl-2 font-medium"
//                   >
//                     {framework}
//                     <span className="mx-2">
//                       {i !== skill.frameworks.length - 1 && `•`}
//                     </span>
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }
