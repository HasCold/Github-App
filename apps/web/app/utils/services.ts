export function formatMemberSince(inputDateString: string | undefined){
    // const options = { month: "short", day: "2-digit", year: "numeric" };
    // const formatDate = new Date(inputDateString).toLocaleDateString("en-US", options);
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

export function formatDate(inputDateString: string){
    const date = new Date(inputDateString);  // 2024-02-23T16:00:54Z

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]

    const year = date.getFullYear();
    const month = date.getMonth();
    const monthIndex = months[month];
    const day = date.getDate();

    function getOrdinalSuffix(day: number){
        if(day >= 11 && day <= 13){
            return day + "th";
        }

        switch(day % 10){
            case 1: 
            return day + "st";
            case 2:
            return day + "nd";
            case 3: 
            return day + "rd";
            default: 
            return day + "th"
        }

    }
    const formatedDate = `${monthIndex} ${getOrdinalSuffix(day)}, ${year}`;
    return formatedDate; 

}