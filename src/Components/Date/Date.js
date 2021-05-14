//vendor
import React, {useState, useEffect} from 'react'

//project
//own

const useDate = () =>{
    const locale = 'en';
    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [] )

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });
  
    return {
      date,
      time,
    };
};


export default function RealDate(){
    const {date, time} = useDate();
    return(
        <>{date} / {time}</>
    )
}
