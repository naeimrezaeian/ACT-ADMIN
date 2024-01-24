export const convertToBool=str=>str==='true'
export const convertToTime=minutes=>{
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  }
export const convertToMinutes=timeString=>{
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  }
  