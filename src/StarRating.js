import React,{useState}from 'react';
import { FaStar } from 'react-icons/fa';


const Star = ({ selected = false ,onSelect = f=>f}) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = length => [...Array(length)];

export default function StarRating({ style ={},totalStars = 5 })
 {
  const [selectedStar,setSelectedStar] = useState(0);
  return (
    <div style={{marginLeft:"50%",marginTop:"50%",...style}}>
  {createArray(totalStars).map((n, i) => (
  < Star
   key={i}
    selected={selectedStar > i} 
    onSelect={() => setSelectedStar(i + 1)}
    />
  ))}
<p>
  {selectedStar} of {totalStars} Stars
</p>
</div>
);
}
