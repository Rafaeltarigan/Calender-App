/*JavaScript*/

document.addEventListener('DOMContentLoaded', () => {
    const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

    const createCalendar = (month, year, elementId) => {
        const daysContainer = document.getElementById(elementId);
        daysContainer.innerHTML = '';

        const days = daysInMonth(month, year);
        for (let i = 1; i <= days; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.innerText = i;
            daysContainer.appendChild(dayDiv);
        }
    };

    const currentYear = 2024;

    createCalendar(1, currentYear, 'january-days');
    createCalendar(2, currentYear, 'february-days');
    createCalendar(3, currentYear, 'march-days');
    createCalendar(4, currentYear, 'april-days');
    createCalendar(5, currentYear, 'may-days');
    createCalendar(6, currentYear, 'june-days');
    createCalendar(7, currentYear, 'july-days');
    createCalendar(8, currentYear, 'august-days');
    createCalendar(9, currentYear, 'september-days');
    createCalendar(10, currentYear, 'october-days');
    createCalendar(11, currentYear, 'november-days');
    createCalendar(12, currentYear, 'december-days');

    const logo = document.getElementById('logo');
    const calendarContainer = document.getElementById('calendar-container');
    const logoContainer = document.querySelector('.logo-container');

    let isCalendarVisible = false;

    logo.addEventListener('click', () => {
        isCalendarVisible = !isCalendarVisible;
        calendarContainer.classList.toggle('show', isCalendarVisible);
        if (isCalendarVisible) {
            logoContainer.style.top = '10px';
            logoContainer.style.left = '10px';
            logoContainer.style.transform = 'translate(0, 0) scale(1)';
        } else {
            logoContainer.style.top = '50%';
            logoContainer.style.left = '50%';
            logoContainer.style.transform = 'translate(-50%, -50%)';
        }
    });
});
