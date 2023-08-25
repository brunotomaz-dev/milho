import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestData } from "../api/requests";
import PersonalScore from "../components/PersonalScore";
import { IScoreData } from "../interfaces/IScore";

const Placar: React.FC = () => {
  const [renderPlayerScore, setrenderPlayerScore] = useState<boolean>(true);
  const [renderGeneralScore, setrenderGeneralScore] = useState<boolean>(false);
  const [data, setData] = useState<IScoreData[]>([]);

  const params = useParams();
  
  const getScore = async () => {
    const data = await requestData(`/score/${params.name}`);
    console.log(data);
    setData(data.score);
  }

  useEffect(() => {
    getScore();
  }, []);

  return (
   <main className="main-container">
    <section className="form">
      <h1>Placar</h1>
      <PersonalScore data={data}/>
    </section>
   </main>
  );
}

export default Placar;