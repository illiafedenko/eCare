import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { getDatabase, onValue, ref } from 'firebase/database';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {

  const options = {
    maintainAspectRatio: false,
    // aspectRatio: 1.5,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        font: {
          family: 'poppins',
          size: 16
        }
      },
      title: {
        display: true,
        text: 'This week',
        position: 'top',
        align: 'start',
        font: {
          family: 'poppins',
          size: 16
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const db = getDatabase();


  const getWeekDates = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const dayOfMonth = today.getDate();

    // Calculate how many days to subtract to get to Monday
    // If today is Sunday (0), set it to 6 (previous Monday), otherwise dayOfWeek - 1
    const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    // Create a new date object set to the Monday of this week
    const monday = new Date(today);
    monday.setDate(dayOfMonth - daysToMonday);

    // Array to hold all days of the week formatted
    const weekDates = [];

    // Weekdays array for formatting
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // Loop 7 days to cover Monday to Sunday
    for (let i = 0; i < 7; i++) {
      // Create a new date object for each day of the week
      const weekDay = new Date(monday);
      weekDay.setDate(monday.getDate() + i);

      // Format the date as "Mon (05-29-2024)"
      const formattedDate = `${weekdays[weekDay.getDay() === 0 ? 6 : weekDay.getDay() - 1]} (${weekDay.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      })})`;

      // Add the formatted date to the array
      weekDates.push(`${weekDay.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      }).replace(/\//g, '-')}`);
    }

    return weekDates;
  }

  const [week, setWeek] = useState(getWeekDates());
  const [satisticalData, setSatisticalData] = useState();

  const getData = async () => {
    onValue(ref(db, 'schedules'), (snapshot) => {
      var hourTemp = {
        [week[0]]: 0,
        [week[1]]: 0,
        [week[2]]: 0,
        [week[3]]: 0,
        [week[4]]: 0,
        [week[5]]: 0,
        [week[6]]: 0,
      };
      var userTemp = {
        [week[0]]: 0,
        [week[1]]: 0,
        [week[2]]: 0,
        [week[3]]: 0,
        [week[4]]: 0,
        [week[5]]: 0,
        [week[6]]: 0,
      };
      console.log(hourTemp);
      for (let scheduleID in snapshot.val()) {
        if (snapshot.val().hasOwnProperty(scheduleID)) {
          let schedule = snapshot.val()[scheduleID]
          for (let date in schedule) {
            if (schedule.hasOwnProperty(date)) {
              if (week.indexOf(date) >= 0) {
                userTemp[date] += 1;
                let hours = schedule[date];
                let countHours = hours.filter(element => element === true).length;
                hourTemp[date] += countHours;
              }
            }
          }
        }
      }
      console.log(123);
      console.log(userTemp);
      console.log(hourTemp);
      var usersByDate = [userTemp[week[0]], userTemp[week[1]], userTemp[week[2]], userTemp[week[3]], userTemp[week[4]], userTemp[week[5]], userTemp[week[6]]];
      var hoursByDate = [hourTemp[week[0]], hourTemp[week[1]], hourTemp[week[2]], hourTemp[week[3]], hourTemp[week[4]], hourTemp[week[5]], hourTemp[week[6]]];
      console.log(usersByDate, hoursByDate);
      setSatisticalData({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Users',
            data: usersByDate,
            fill: false,
            borderColor: 'rgb(255, 100, 100)',
            tension: 0.1
          },
          {
            label: 'Hours',
            data: hoursByDate,
            fill: false,
            borderColor: 'rgb(100, 100, 255)',
            tension: 0.1
          }
        ]
      });
    })

  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className=' w-full h-full'>
      {
        satisticalData != null ?

          <Line data={satisticalData} options={options} />
          :
          <></>
      }
    </div>
  )
}
