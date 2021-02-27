import logo from "./logo.svg";
import "./App.css";
import "./list.json";
import menu from "./data.js";

var c=0;
const data = menu;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="myclass">
          {data.map((data, key) => {
            return (
              <div key={key}>
                <Stuff
                  key={key}
                  id={data.id} 
               title={data.title}
                  category={data.category}
                  price={data.price}
                  /><span/>
                  <Image img= { data.img }/>           
                <button class="btn" onclick="">{data.id}Buy now</button>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

const Image= ({img}) => {
  return( 
    <div>  
 {   img }
  </div> );
}




const Stuff = ({ id, title, category, price }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{id}</h5>
          </td>
          <td>
            <h5>{title}</h5>
          </td>
          <td>
            <h4>{category}</h4>
          </td>
          <td>
            <p>{price}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default App;
