import React,{useEffect, useState} from 'react';

const TotalBooksRead = () => {

    const [totalBooksRead,setTotalBooks] = useState(0);
    useEffect(()=>{
        let totalBooksRead = parseInt(localStorage.getItem("totalBooksRead"));
        if(!totalBooksRead){
            setTotalBooks(0);
            localStorage.setItem("totalBooksRead","0");
        }
        else {
            setTotalBooks(totalBooksRead);   
        }
    })
    return (
    <div>
    Total Books Read : {totalBooksRead}
    </div>
    )
}

export default TotalBooksRead;