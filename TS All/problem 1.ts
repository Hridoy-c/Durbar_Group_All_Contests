function getMonthNames(monthNumber: number): string{
    const monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // for(let item of monthNames){
    //  if(monthNumber  === monthNames.indexOf(item)+1){
    //      return item;
    //  }
    // }

    return monthNames[monthNumber-1];



}


console.log(getMonthNames(7));