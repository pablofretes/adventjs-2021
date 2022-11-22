export default function daysToXmas(date) {
  const targetDate = new Date('Dec 25, 2021').getTime();
  const initialDate = new Date(date).getTime();
  const millisecondsBetween = targetDate - initialDate;
  const dayInMilliseconds = 1000*60*60*24;

  return Math.ceil(millisecondsBetween / dayInMilliseconds);
}