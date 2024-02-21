// export default function ItemList ({categories}){
//     const categories = ["Meats", "Fish", "Vegetables","Breakfast Products","Tin/Jars","Grain & Swallows","Seasonings","Snacks","Body Products","Tea/Drinks"];
//     const styles ={
//         container: {
//             display:"flex",
//             flexDirection: "column",
//             alignItems: "center",
//         },
//         listItem: {
//             marginBottom: "10px"
//         },
//     };
//     return (
//         <div style={styles.container}>
//           {list.map((item, index) => (
//             <div key={index} style={styles.listItem}>
//               {item}
//             </div>
//           ))}
//     </div>
//       );
    //}
    export default function ItemList({ categories }) {
        const styles = {
          container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          listItem: {
            marginBottom: "10px",
          },
        };
        
        return (
          <div style={styles.container}>
            {categories.map((item, index) => (
              <div key={index} style={styles.listItem}>
                {item}
              </div>
            ))}
          </div>
        );
      }    