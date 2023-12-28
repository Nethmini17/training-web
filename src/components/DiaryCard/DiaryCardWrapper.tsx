import { useEffect, useState } from "react";
import DiaryCard from "./DiaryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsRequest } from "../../redux/reducers/cardReducer"; 
import { useTypedSelector } from "../../redux/store/store";

interface Card {
  id: string;
  title: string;
  description: string;
  username: string | null;
}

interface SearchInputProps {
  searchInput: string;
}

export default function DiaryCardWrapper({ searchInput }: SearchInputProps) {

  const dispatch = useDispatch();
  const cards: Card[] = useSelector((state: any) => state.cards);
  const currentUsername = useTypedSelector((state) => state.users.currentUsername);

  useEffect(() => {
    dispatch(fetchCardsRequest());
  }, [dispatch]);

  const filteredCards = cards.filter((card) =>
    card.username === currentUsername &&
    card.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const [columns, setColumns] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1500 && window.innerWidth > 1000) {
        setColumns(2);
      } else if (window.innerWidth <= 1000) {
        setColumns(1);
      } else {
        setColumns(5);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: '20px',
  };


  return (
    <div
    style={gridStyles}
    >
      {filteredCards.map((card: Card, index) => (
        <DiaryCard title={card.title} description={card.description} key={index} />
      ))}
    </div>
  );
  
}