import styled from 'styled-components';

export const WeatherContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 1.5rem;
    color: #2E8B57;
    margin: 0;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2E8B57;
  padding: 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background: #f5f5f5;
  }
`;

export const LocationInfo = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  p {
    margin: 0.5rem 0;
    color: #333;
  }
`;

export const AlertBanner = styled.div`
  background-color: #fff2f0;
  border-left: 4px solid #ff4d4f;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;

  h3 {
    color: #cf1322;
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    margin: 0.5rem 0;
    color: #666;
  }
`;

export const DaySummary = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;

  .weather-icon {
    font-size: 3rem;
  }

  .temp-summary {
    flex: 1;
    
    h3 {
      margin: 0 0 0.5rem 0;
      color: #2E8B57;
    }
    
    .temp-range {
      display: flex;
      gap: 1rem;
      color: #666;
    }
  }
`;

export const WeekForecast = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow-x: auto;

  h2 {
    color: #2E8B57;
    margin-top: 0;
  }
`;

export const DaysContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  min-width: max-content;
`;

export const DayCard = styled.div`
  min-width: 80px;
  text-align: center;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${props => props.$active ? '#f0f9f0' : 'transparent'};
  border: 1px solid ${props => props.$active ? '#2E8B57' : '#eee'};

  &:hover {
    background: #f5f5f5;
  }

  .day-name {
    font-weight: 600;
    color: #333;
  }

  .date {
    font-size: 0.9rem;
    color: #666;
    margin: 0.25rem 0;
  }

  .temp {
    font-size: 0.9rem;
    color: #2E8B57;
    font-weight: 600;
  }
`;

export const HourlyForecast = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow-x: auto;

  h2 {
    color: #2E8B57;
    margin-top: 0;
  }
`;

export const HourlyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  min-width: 600px;

  th {
    text-align: left;
    padding: 0.75rem;
    color: #666;
    font-weight: 500;
    border-bottom: 1px solid #eee;
  }

  td {
    padding: 0.75rem;
    border-bottom: 1px solid #f5f5f5;
  }

  .hour-cell {
    font-weight: 500;
  }

  .temp-cell {
    color: #2E8B57;
    font-weight: 600;
  }

  .rain-cell {
    color: #1890ff;
  }
`;

export const AdditionalInfo = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  .info-item {
    text-align: center;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 6px;

    h4 {
      margin: 0 0 0.5rem 0;
      color: #666;
      font-size: 0.9rem;
    }

    p {
      margin: 0;
      font-size: 1.1rem;
      color: #333;
      font-weight: 500;
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  color: #666;
  font-size: 0.9rem;

  button {
    background: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    color: #666;
    cursor: pointer;
    margin-right: 1rem;
    transition: all 0.2s;

    &:hover {
      border-color: #2E8B57;
      color: #2E8B57;
    }
  }
`;