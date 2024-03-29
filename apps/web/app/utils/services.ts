export function formatMemberSince(inputDateString: string | undefined){
     // Parse the input date string
    const date = new Date(String(inputDateString));

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    const year = date.getFullYear();

     // Format the date string
    const formatDate = `${day} ${month}, ${year}`;

    return formatDate;
}