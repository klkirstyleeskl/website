import React from "react";


const UsersPage = () => {

    return (
        <div>
             <ul>
                 {["Jack", "Jill", "Kirsty", "Liz"].map((user, idx) => {
                     return <li key={idx}>{user}</li>;
                 })}
             </ul>
        </div>     
    );
}

export default UsersPage ;