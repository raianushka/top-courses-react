import React from 'react';
import {FcLike, FcLikePlaceholder } from 'react-icons/fc'; 
import { toast } from 'react-toastify'

const Card  = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        //logic
        if(likedCourses.includes(course.id)){
            //pehle se like hua pada h 
            setLikedCourses((prev) => prev.filter((cid)=>(cid !== course.id)));
            toast.warning("Like removed")
        }
        else{
            //Pehle se like ni h ye course
            //insert krna h ye course liked courses ne
            if(likedCourses.length ===0){
                setLikedCourses([course.id])
            }
            else{
                //non-empty pehle se 
                setLikedCourses((prev) =>[...prev, course.id])
            }
            toast.success("Liked Successfully")
        }
    }
    return(
        <div   className='w-[300px] bg-blue-900 rounded-md overflow-hidden bg-opacity-80'>
            <div className='relative'>
                <img src={course.image.url} alt='course-thumbnail' />
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-14px] grid place-items-center'>
                   <button onClick={clickHandler}>
                     {
                       likedCourses.includes(course.id) ? 
                       (<FcLike fontSize="1.75rem"/>):
                       (<FcLikePlaceholder fontSize="1.75rem" />)
                     }
                   </button>
                </div>
            </div>
            
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='text-white mt-2'>
                    {
                    course.description.length>100?
                    (course.description.substr(0,100)) + "...": 
                    (course.description)
                     } 
                    </p>
            </div>
        </div>
    )
}

export default Card;