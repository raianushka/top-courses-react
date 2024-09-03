import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js';
import Filter from './components/Filter.js';
import Cards from './components/Cards.js';
import Spinner from './components/Spinner.js';
import './App.css';
import { apiUrl,filterData } from './data.js';
import { toast } from "react-toastify";

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading]=useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch (apiUrl);
      let output = await response.json();
      //output ->
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network error");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div  className=' min-h-screen flex flex-col '>
      <div>
      <Navbar/>
      </div>


      <div className='bg-blue-800 min-h-screen'>
      <Filter 
      filterData={filterData}
      category = {category}
      setCategory={setCategory}/> 
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
      {
        loading ? (<Spinner/>): (<Cards courses = {courses} category={category}/>)
      }
      </div>

      </div>

   
   
    </div>
  );
}

export default App;
