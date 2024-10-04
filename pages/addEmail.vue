<template>
  <div class="datepicker-container">
    <input
      type="text"
      id="dateRangeInput"
      placeholder="Select date range"
    />
    <div
      id="calendar"
      class="calendar hidden"
    >
      <div class="calendar-header">
        <button
          id="prevMonth"
          class="btn"
        >
          Prev
        </button>
        <span
          id="monthYear"
          class="month-year"
        ></span>
        <button
          id="nextMonth"
          class="btn"
        >
          Next
        </button>
      </div>
      <div class="calendar-days">
        <!-- Days of the week headers -->
        <div class="day-header">Sun</div>
        <div class="day-header">Mon</div>
        <div class="day-header">Tue</div>
        <div class="day-header">Wed</div>
        <div class="day-header">Thu</div>
        <div class="day-header">Fri</div>
        <div class="day-header">Sat</div>
        <!-- Days will be injected here -->
      </div>
    </div>
  </div>
</template>
<style lang="scss">
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  margin: 0;
}

.datepicker-container {
  position: relative;
  width: 300px;
}

#dateRangeInput {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.calendar {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.hidden {
  display: none;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #f7f7f7;
}

.month-year {
  font-weight: bold;
}

.btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 14px;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.day-header {
  padding: 10px;
  text-align: center;
  font-weight: bold;
}

.day {
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

.day:hover {
  background-color: #e0e0e0;
}

.selected {
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
}

.in-range {
  background-color: #d0e0ff;
}

.range-highlight {
  position: absolute;
  background-color: #d0e0ff;
  z-index: -1;
}
</style>
<script>
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const dateRangeInput = document.getElementById('dateRangeInput')
  const calendar = document.getElementById('calendar')
  const monthYear = document.getElementById('monthYear')
  const prevMonth = document.getElementById('prevMonth')
  const nextMonth = document.getElementById('nextMonth')
  const calendarDays = document.querySelector('.calendar-days')

  let startDate = null
  let endDate = null
  let currentMonth = new Date().getMonth()
  let currentYear = new Date().getFullYear()

  function renderCalendar() {
    calendarDays.innerHTML = ''

    const firstDay = new Date(currentYear, currentMonth, 1).getDay()
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate()

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const cell = document.createElement('div')
      calendarDays.appendChild(cell)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= lastDay; day++) {
      const cell = document.createElement('div')
      cell.className = 'day'
      cell.textContent = day
      cell.dataset.date = `${currentYear}-${currentMonth + 1}-${day}`
      cell.addEventListener('click', handleDateClick)
      calendarDays.appendChild(cell)
    }

    monthYear.textContent = `${currentYear}-${currentMonth + 1}`
  }

  function handleDateClick(event) {
    const selectedDate = new Date(event.target.dataset.date)
    if (!startDate || (endDate && selectedDate < startDate)) {
      startDate = selectedDate
      endDate = null
    } else if (!endDate || selectedDate > startDate) {
      endDate = selectedDate
    }

    updateCalendar()
    updateInputField()
  }

  function updateCalendar() {
    const cells = document.querySelectorAll('.day')
    cells.forEach(cell => {
      const cellDate = new Date(cell.dataset.date)

      if (startDate && endDate) {
        if (cellDate.getTime() === startDate.getTime()) {
          cell.classList.add('selected')
        } else if (cellDate.getTime() === endDate.getTime()) {
          cell.classList.add('selected')
        } else if (cellDate > startDate && cellDate < endDate) {
          cell.classList.add('in-range')
        } else {
          cell.classList.remove('selected', 'in-range')
        }
      } else {
        cell.classList.remove('selected', 'in-range')
      }
    })
  }

  function updateInputField() {
    if (startDate && endDate) {
      dateRangeInput.value = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
    } else if (startDate) {
      dateRangeInput.value = `${startDate.toLocaleDateString()}`
    } else {
      dateRangeInput.value = ''
    }
  }

  dateRangeInput.addEventListener('click', () => {
    calendar.classList.toggle('hidden')
    renderCalendar()
  })

  prevMonth.addEventListener('click', () => {
    currentMonth -= 1
    if (currentMonth < 0) {
      currentMonth = 11
      currentYear -= 1
    }
    renderCalendar()
  })

  nextMonth.addEventListener('click', () => {
    currentMonth += 1
    if (currentMonth > 11) {
      currentMonth = 0
      currentYear += 1
    }
    renderCalendar()
  })
})
</script>
