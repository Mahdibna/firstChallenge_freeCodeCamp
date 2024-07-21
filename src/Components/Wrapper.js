import { useCallback, useEffect, useState ,useMemo} from "react";
import Card from "./Card";
export default function Wrapper() {
  const [rand, setRand] = useState(null);
  const [color , setcolor]=useState(null);
  const texts = useMemo(() => [
    "Mahdi claimed that Khaled took the money without permission and wants justice.",
    "Ali defended Khaled, insisting that he is innocent and would never steal.",
    "Salah is facing accusations for a crime he allegedly committed, causing much controversy.",
    "Noura believes that the truth will eventually come out and clear all misunderstandings.",
    "Amina is worried about the impact of these accusations on their community and friends.",
    "Hassan suggested that they should all sit down and discuss the matter calmly.",
    "Fatima feels that the situation has escalated too quickly without proper evidence.",
    "Omar witnessed the event and thinks there might be a big misunderstanding."
  ], []);
  const randomNumber =useCallback(() => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    const random = Math.floor(Math.random() * texts.length);
    setRand(random);
    setcolor(color);
  },[]);
  useEffect(() => {
    randomNumber();
  }, []);
  return (
    rand !== null && (
      <div id="quote-box " className="full-vw full-vh d-flex  justify-content-center align-items-center" style={{ height:'100vh' , backgroundColor: color , transition : 'all 1s' }}>
        <Card randomNumber={randomNumber} rand={rand} color={color} text={texts[rand]}/>
      </div>
    )
  );
}
