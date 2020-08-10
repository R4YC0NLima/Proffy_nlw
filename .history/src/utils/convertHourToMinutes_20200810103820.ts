export default function convertHourToMinutes(time: string) {
    
    const array [hour, minutes] = time.split(':').map(Number)

    const timeInMinutes = (hour * 60) + minutes;

    return timeInMinutes
}