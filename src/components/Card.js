import React from "react";

function Card({ToDo, onDelete, onClick}) {

    const cardStyles1 = {
        marginLeft: "100px",
       float: "left",
        width:"300px",
        height: "450px",
        backgroundColor: "white",
        color:"rgb(165, 109, 36)"
        
    }
    const cardStyles2 = {
        marginLeft: "800px",
        width:"300px",
        height: "450px",
        backgroundColor: "white",
        color:"rgb(165, 109, 36)",
        backgroundImage: "url(https://images.unsplash.com/photo-1616587607568-f7f651637644?ixlib=rb-1.2.1&dl=laura-adai-MpKiQTIJTP8-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex"
    }

    
    function handleDeleteToDo() {
      fetch(`http://localhost:3000/ToDo/${ToDo.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => onDelete(ToDo));
    }


    return(
<div className="px-5 my-5 align-items-center">
        <div className="align-items-center">
          <div className="column text-center">
            <div className="container" >
              <div className="column align-items-md-stretch">
                <div className="col-md-6"style={cardStyles1} key={ToDo.id}>
                  <div className="h-100 p-5 text-white bg-dark rounded-3">
                    <h2>TODO LIST</h2>
                    <ol>
                      <li>{ToDo.activity}<br/><span>*{ToDo.duration}*</span><br/>
                      <button
                        className="ui mini red button"
                        onClick={handleDeleteToDo}>
                              x
                          </button>
                         <input
                             type="checkbox"
                              id="completed"
                              checked={ToDo.completed}
                            onChange={() => onClick(ToDo.id)}
                            />
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="col-md-6" style={cardStyles2}>
                  <div className="h-100 p-5 bg-light border rounded-3">
                    <h2>Write my story...</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card;