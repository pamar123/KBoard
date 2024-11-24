import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import ErrorPage from './ErrorPage';
import Swimlane from '../components/Swimlane';
import { TicketData } from '../interfaces/TicketData';
import { ApiMessage } from '../interfaces/ApiMessage';

const boardStates = ['Todo', 'In Progress', 'Done'];

const Board = () => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTickets = async () => {
    try {
      setIsLoading(true);
      const data = await api.getTickets();
      setTickets(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load tickets');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteIndvTicket = async (ticketId: number): Promise<ApiMessage> => {
    try {
      await api.deleteTicket(ticketId);
      await fetchTickets();
      return { message: 'Ticket deleted' };
    } catch (err) {
      return Promise.reject(err);
    }
  }

  useEffect(() => {
    fetchTickets();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading tickets...</p>
      </div>
    );
  }

  if (error) {
    return <ErrorPage message={error} />;
  }

  return (
    <div className='board'>
      <div className="board-header">
        <h1>Kanban Board</h1>
        <button type='button' className='create-ticket-button'>
          <Link to='/create'>New Ticket</Link>
        </button>
      </div>
      <div className='board-display'>
        {boardStates.map((status) => {
          const filteredTickets = tickets.filter(ticket => ticket.status === status);
          return (
            <Swimlane 
              title={status} 
              key={status} 
              tickets={filteredTickets} 
              deleteTicket={deleteIndvTicket}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;