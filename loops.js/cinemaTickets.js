function cinemaTickets(input) {
    let standardTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Finish") {
        let movieName = command;
        let totalSeats = Number(input[index]);
        index++;
        let command1 = input[index];
        index++;
        let seatTaken = 0; 
        while (command1 !== "End") {
            let movieType = command1;

            switch (movieType) { 
                case "standard":
                    standardTickets++;
                    break;
                case "student":
                    studentTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;
            }
            seatTaken++;
            if (seatTaken === totalSeats) {
                break;
            }
            command1 = input[index];
            index++;
        }

        let percentFull = (seatTaken / totalSeats) * 100; 
        console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);
        command = input[index];
        index++;
    }

    let totalTickets = standardTickets + studentTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);
    let standardPercent = (standardTickets / totalTickets) * 100;
    let studentPercent = (studentTickets / totalTickets) * 100;
    let kidPercent = (kidTickets / totalTickets) * 100;

    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"])